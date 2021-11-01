import { Container } from '@mui/material';
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
  const isBigScreen = useMediaQuery({ query: '(min-width: 600px)' });
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

  const bind = useDrag(({ active, movement: [mx, my] }) => {
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
    <Container
      className="bottom-popup-container"
      maxWidth="xl"
      sx={{
        padding: 0,
        zIndex: zIndex,
      }}
    >
      {isBigScreen ? (
        <div className="bottom-popup" style={bigScreenStyle}>
          {children}
        </div>
      ) : (
        <animated.div {...bind()} className="bottom-popup" style={{ height }}>
          {children}
        </animated.div>
      )}
    </Container>
  );
}

export default BottomPopup;
