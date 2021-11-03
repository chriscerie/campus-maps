// no
//ds

import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useRef, ReactNode, CSSProperties } from 'react';
import { useMediaQuery } from 'react-responsive';
import './BottomPopup.scss';

// Height breakpoints by percent
const breakPoints = [15, 45, 95];

function getClosestBreakPoint(num: number) {
  return breakPoints.reduce((prev, curr) => {
    return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
  });
}

function BottomPopup({
  initialHeight = 45,
  bigScreenStyle,
  children,
  zIndex = 15,
}: {
  initialHeight?: typeof breakPoints[number];
  bigScreenStyle?: CSSProperties;
  children?: ReactNode;
  zIndex?: number;
}) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const currentHeight = useRef(initialHeight);
  const currentBreakPoint = useRef(initialHeight);

  const [{ height }, api] = useSpring(() => ({
    to: { height: initialHeight + '%' },
    from: { height: '0%' },
    onChange: (e) => {
      currentHeight.current = parseInt(e.value.height);
    },
    config: {
      damping: 0.8,
      tension: 300,
    },
  }));

  // Any type as type inference messes up tests (complains that ...bind() is not callable)
  const bind: any = useDrag(({ active, movement: [mx, my] }) => {
    // Update current breakpoint when user stops dragging
    if (!active) {
      currentBreakPoint.current = getClosestBreakPoint(currentHeight.current);
    }

    api.start({
      height: active
        ? currentBreakPoint.current + (-100 * my) / window.innerHeight + '%'
        : currentBreakPoint.current + '%',
      immediate: (name) => {
        return active && name === 'height';
      },
    });
  });

  return (
    <div
      className="bottom-popup-container"
      style={{
        zIndex: zIndex,
      }}
    >
      {isBigScreen ? (
        <div className="bottom-popup" style={bigScreenStyle}>
          {children}
        </div>
      ) : (
        <animated.div {...bind()} className="bottom-popup" style={{ height }}>
          <div id="bottom-popup-handle" />
          {children}
        </animated.div>
      )}
    </div>
  );
}

export default BottomPopup;
