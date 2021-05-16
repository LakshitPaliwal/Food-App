import axios from 'axios';


export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:'Bearer p6KHEyRB7nVmqQOPv54iomEofqB8QpQeuzKL9pCUpR4bOAurkh-yEVALSay7AtMKVDDV6sTIBJDu0prFdxzHzJhHYc8XZVsLSxVL99lASwgr6xTrGeTB6D_eiLCfYHYx'
    }
});

