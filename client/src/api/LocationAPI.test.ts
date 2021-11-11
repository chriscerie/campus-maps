import axios from 'axios';
import { getLocationInfo } from './LocationAPI';

jest.mock('axios');

describe('getLocationInfo', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('should return promise with same data', async () => {
    mockedAxios.get.mockResolvedValue({ status: 200, data: 'equal data' });

    await getLocationInfo('1111').then((res) => {
      expect(res).toBe('equal data');
    });
  });
});
