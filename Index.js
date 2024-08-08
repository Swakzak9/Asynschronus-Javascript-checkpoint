

// Iterating with Async/Await
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // wait for 1 second
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);


// Await call
const fetchData = async () => {
    // Simulating a fetch call
    return new Promise(resolve => setTimeout(() => resolve('API Data'), 2000));
};

async function awaitCall() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:
awaitCall();


// Handling Errors with Async/Await
const getData = async () => {
   
    return new Promise((resolve, reject) => setTimeout(() => reject(new Error('Failed to fetch')), 2000));
};

async function waitCall() {
    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message); 
    }
}

waitCall();

// Chaining Async/Await
const rep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function logMessage(message) {
    await rep(3000); // wait for 1 second
    console.log(message);
}

async function chainedAsyncFunctions() {
    await logMessage('First message');
    await logMessage('Second message');
    await logMessage('Third message');
}

 
chainedAsyncFunctions();


//  Awaiting Parallel Calls
const fetchUrl = async url => {
    // Simulate fetch call
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), 2000));
};

async function parallelCalls(urls) {
    try {
        const results = await Promise.all(urls.map(url => fetchUrl(url)));
        console.log('Responses:', results);
    } catch (error) {
        console.error('Error fetching URLs:', error);
    }
}


parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);




// Awaiting concurrent results
const fetchData1 = async () => {
    return new Promise(resolve => setTimeout(() => resolve('Data from API 1'), 2000));
};

const fetchData2 = async () => {
    return new Promise(resolve => setTimeout(() => resolve('Data from API 2'), 3000));
};

async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
        console.log('Combined results:', result1, result2);
    } catch (error) {
        console.error('Error in concurrent requests:', error);
    }
}

concurrentRequests();
