let logs = [];

function addLogs(newLogs){
    logs = logs.concat(newLogs);
}

function getLogs(){
    return logs;
}

function clearLogs(){
    logs = [];
}

module.exports = { addLogs, getLogs, clearLogs };