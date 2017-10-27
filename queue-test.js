const PriorityQueue = require('./utils/queue').PriorityQueue;
let pq = new PriorityQueue();

pq.enqueue('a',2);
pq.enqueue('b',1);
pq.print();