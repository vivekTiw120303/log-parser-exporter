const { parseLogFile } = require('../src/utils/logParser');
const path = require('path');

test('parse sample JSON log file correctly', async () => {
    const filePath = path.join(__dirname, 'sample.json');
    const logs = await parseLogFile(filePath);

    expect(Array.isArray(logs)).toBe(true);
    expect(logs.length).toBeGreaterThan(0);
    expect(logs[0]).toHaveProperty('timestamp');
});