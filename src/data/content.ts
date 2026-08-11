// All facts below are sourced directly from Md Shahid Ali Khan's resume.
// Nothing here is invented — metrics, dates, and scope are quoted as stated.

export const profile = {
  name: "Md Shahid Ali Khan",
  role: "Backend Software Engineer",
  focus: "Distributed Systems · Financial Services",
  phone: "8809682225",
  email: "2000shahid2019@gmail.com",
  linkedin: "https://linkedin.com/in/md-shahid-ali-khan-aa18371b0",
  linkedinLabel: "linkedin.com/mdshahidalikhan",
  github: "https://github.com/mdshahidalikhan",
  githubLabel: "github.com/mdshahidalikhan",
  location: "Bangalore, India",
  summary:
    "Backend Software Engineer with 3+ years of experience in Java and Spring Boot, building microservices and distributed systems using Kafka, Redis, REST APIs, concurrency, and asynchronous processing in the financial services domain.",
};

export const metrics = [
  {
    label: "API response time",
    before: "10s",
    after: "<2s",
    beforeVal: 10,
    afterVal: 2,
    unit: "s",
    detail: "Two-level caching (in-memory L1 + Redis L2) for optimized report requests.",
  },
  {
    label: "Report generation time",
    before: "2min",
    after: "30s",
    beforeVal: 120,
    afterVal: 30,
    unit: "s",
    detail: "Cache key, TTL, and eviction tuning on top of the L1/L2 cache layer.",
  },
  {
    label: "Records processed / report run",
    before: null,
    after: "50K+",
    beforeVal: null,
    afterVal: 50000,
    unit: "records",
    detail: "Across financial risk analysis and reporting workloads.",
  },
  {
    label: "Transaction records analyzed",
    before: null,
    after: "100K+",
    beforeVal: null,
    afterVal: 100000,
    unit: "records",
    detail: "Rejected-transaction categorization by risk, via optimized SQL.",
  },
  {
    label: "Legacy scripts migrated",
    before: null,
    after: "70+",
    beforeVal: null,
    afterVal: 70,
    unit: "scripts",
    detail: "Unix shell scripts migrated to Linux and refactored for maintainability.",
  },
  {
    label: "Payment gateway throughput",
    before: null,
    after: "10,000 TPS",
    beforeVal: null,
    afterVal: 10000,
    unit: "tps",
    detail: "Benchmarked with JMeter on Kubernetes (personal project).",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Societe Generale",
    role: "Software Engineer",
    period: "July 2023 – Present",
    location: "Bangalore",
    project: "Report Generation & Risk Analytics Platform",
    stack: ["Spring Boot", "Microservices", "Kafka", "Redis"],
    bullets: [
      "Drove the development and modernization of a financial risk analytics platform generating NPV, GAP, and NIM reports, evolving it from a modular monolith toward independently deployable microservices.",
      "Designed a two-level caching architecture using an in-memory L1 cache and Redis-based L2 distributed cache, reducing API response time from 10 seconds to under 2 seconds for optimized report requests.",
      "Optimized cache keys, TTLs, and eviction, cutting report generation time from 2 minutes to 30 seconds.",
      "Refactored long-running report generation into Kafka-driven asynchronous workflows, enabling concurrent report processing and improving API responsiveness.",
      "Implemented resilient Kafka consumer workflows with retries, Dead Letter Topics (DLTs), and automated email notifications for failed report batches.",
      "Processed 50K+ records per report execution across financial risk analysis and reporting workloads.",
    ],
  },
  {
    company: "Societe Generale",
    role: "Software Developer Intern",
    period: "March 2023 – July 2023",
    location: "Bangalore",
    project: "Rejected Transaction Impact Analysis & Script Migration",
    stack: ["Spring Boot", "SQL", "Linux"],
    bullets: [
      "Built a Spring Boot-based analysis platform to categorize rejected transactions by risk, processing 100K+ transaction records using optimized SQL queries to accelerate remediation workflows.",
      "Migrated 70+ legacy Unix shell scripts to Linux and refactored workflows, improving system compatibility, maintainability, and operational efficiency.",
    ],
  },
];

export type ProjectDetail = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  type: "Personal Project";
  tagline: string;
  stack: string[];
  featured: boolean;
  bullets: string[];
  caseStudy?: {
    problem: string;
    architecture: string;
    decisions: ProjectDetail[];
    failureScenarios: ProjectDetail[];
    performance: string[];
    tradeoffs: ProjectDetail[];
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "distributed-payment-gateway",
    name: "Distributed Payment Gateway",
    type: "Personal Project",
    tagline:
      "A multi-rail payment gateway built around idempotency, exactly-once intent, and graceful failure.",
    stack: [
      "Spring Boot",
      "Microservices",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Kubernetes",
      "Resilience4j",
    ],
    featured: true,
    bullets: [
      "Built a distributed payment gateway supporting Card, UPI, Net Banking, and Wallet through a Strategy-based adapter layer, benchmarked at up to 10,000 TPS using JMeter on Kubernetes.",
      "Designed a secure card-data vault using AES-256 envelope encryption and Spring Security Crypto, with controlled handling of sensitive payment data.",
      "Implemented SAGA-based payment workflows, the Transactional Outbox pattern, with Redis SETNX-based idempotency to prevent duplicate payment processing during retries.",
      "Built a webhook delivery service with HMAC-SHA256 signing, exponential backoff, and DLQ-based replay, with Resilience4j circuit breakers and failure-injection testing for resilience.",
      "Deployed services on Kubernetes with HPA-based scaling and added Prometheus, Grafana, and Zipkin for metrics, dashboards, and distributed tracing.",
    ],
    caseStudy: {
      problem:
        "A payment gateway has to accept Card, UPI, Net Banking, and Wallet transactions through one consistent contract, guarantee a payment is never processed twice — even when a client retries after a timeout — and keep sensitive card data out of reach of anything that doesn't strictly need it, all while staying responsive under load.",
      architecture:
        "Each payment rail (Card, UPI, Net Banking, Wallet) is implemented behind a common interface using the Strategy pattern, so the gateway routes a request to the correct adapter without branching logic scattered across the codebase. State changes that must be atomic with an outbound event — for example, 'payment authorized' and 'emit PaymentAuthorized' — go through the Transactional Outbox pattern: the state change and the outbound event are written in the same local database transaction, and a relay publishes the event to Kafka afterward, removing the class of bugs where the DB commits but the event is lost (or the reverse). Longer-running payment flows that span multiple services are coordinated as SAGA workflows rather than distributed transactions, so a failure partway through triggers compensating steps instead of leaving state inconsistent.",
      decisions: [
        {
          heading: "Idempotency via Redis SETNX",
          body: "Every incoming payment request carries an idempotency key. Before processing, the service attempts a Redis SETNX on that key; if the key already exists, the request is recognized as a retry and the original result is returned instead of reprocessing the payment. This keeps duplicate-prevention out of the critical path of the database and makes retries safe by construction.",
        },
        {
          heading: "Card data isolation",
          body: "Card data is handled through a dedicated vault service using AES-256 envelope encryption via Spring Security Crypto, so raw card data is decrypted only where it's strictly needed rather than being passed through general application logic.",
        },
        {
          heading: "Webhook delivery as its own service",
          body: "Outbound webhooks (notifying merchants of payment state changes) are handled by a separate delivery service with HMAC-SHA256 request signing, exponential backoff on failed deliveries, and a dead-letter queue with replay — so a slow or failing merchant endpoint can't back-pressure the core payment path.",
        },
      ],
      failureScenarios: [
        {
          heading: "Duplicate submission on client retry",
          body: "A client times out waiting for a response and retries the same payment. The Redis SETNX idempotency check short-circuits the second attempt and returns the original outcome, preventing a duplicate charge.",
        },
        {
          heading: "Downstream rail unavailable mid-SAGA",
          body: "If a step in a SAGA-coordinated payment flow fails (e.g. a downstream rail is unavailable), compensating actions run to unwind the prior steps instead of leaving the payment in an inconsistent state.",
        },
        {
          heading: "Webhook endpoint failing or slow",
          body: "Failed webhook deliveries are retried with exponential backoff and, after repeated failure, routed to a dead-letter queue for replay — verified with deliberate failure-injection testing rather than assumed to work.",
        },
        {
          heading: "Cascading failure under load",
          body: "Resilience4j circuit breakers wrap calls to dependent services so that a failing or slow dependency degrades gracefully instead of exhausting threads and taking the rest of the system down with it.",
        },
      ],
      performance: [
        "Benchmarked at up to 10,000 TPS using JMeter on Kubernetes.",
        "Horizontal Pod Autoscaling (HPA) scales services with load on Kubernetes.",
        "Prometheus, Grafana, and Zipkin provide metrics, dashboards, and distributed tracing across the request path.",
      ],
      tradeoffs: [
        {
          heading: "SAGA over distributed transactions",
          body: "Choosing SAGA-based coordination over two-phase-commit-style distributed transactions trades strict atomicity for availability and service independence — each service stays free to fail and recover on its own, at the cost of needing well-defined compensating actions for every step.",
        },
        {
          heading: "Outbox pattern adds a relay",
          body: "The Transactional Outbox pattern removes dual-write inconsistency between the database and Kafka, at the cost of an additional relay component and at-least-once delivery semantics that downstream consumers must handle idempotently.",
        },
      ],
      outcome:
        "A payment gateway where duplicate processing, partial failures, and slow downstream dependencies are treated as expected conditions with defined behavior — not edge cases — verified under load and under deliberate failure injection.",
    },
  },
];

export type Note = {
  slug: string;
  title: string;
  tags: string[];
  readTime: string;
  summary: string;
  content: string[]; // paragraphs / markdown-lite blocks
};

export const notes: Note[] = [
  {
    slug: "two-level-caching",
    title: "Two-Level Caching: Cutting Report Latency from 10s to Under 2s",
    tags: ["Caching", "Redis", "Performance"],
    readTime: "6 min",
    summary:
      "Why a single cache layer wasn't enough for a financial reporting workload, and how an in-memory L1 in front of a Redis L2 changed the latency profile.",
    content: [
      "A financial risk analytics platform generating NPV, GAP, and NIM reports has an awkward latency shape: some report parameters repeat constantly within a short window (the same book, the same as-of date, requested by more than one analyst), while others are effectively one-off. A single cache layer struggles to serve both cases well — a distributed cache alone still pays network round-trip cost on every hit, and a local cache alone doesn't survive across instances or restarts.",
      "The fix was a two-level cache: an in-memory L1 cache on each service instance for the hottest, most recently used report fragments, backed by a Redis-based L2 distributed cache that all instances share. A request first checks L1; on a miss it checks L2; only a miss on both reaches the underlying computation. This shape means the most repeated lookups never leave the process, while less-hot but still-repeated lookups are still spared a full recompute.",
      "This two-level design reduced API response time from 10 seconds to under 2 seconds for optimized report requests. A second pass — tuning cache keys, TTLs, and eviction policy — brought total report generation time down further, from 2 minutes to 30 seconds.",
      "The part that's easy to underestimate is cache key design. A key that's too coarse causes false sharing between logically different reports; a key that's too fine fragments the cache and tanks the hit rate. Getting this right meant keying on exactly the parameters that determine report content — no more, no less — and setting TTLs based on how often the underlying risk data actually changes, not on a round default.",
    ],
  },
  {
    slug: "kafka-async-reporting",
    title: "Moving Long-Running Reports Off the Request Thread with Kafka",
    tags: ["Kafka", "Async Processing", "Microservices"],
    readTime: "5 min",
    summary:
      "Refactoring synchronous, long-running report generation into Kafka-driven asynchronous workflows — and what resilience looks like once you do.",
    content: [
      "Report generation that runs synchronously inside an HTTP request has a hard ceiling: the client is waiting, the connection can time out, and one slow report blocks the thread pool that everyone else's requests depend on. The response to this on the risk analytics platform was to refactor long-running report generation into Kafka-driven asynchronous workflows — a request enqueues a job instead of computing inline, and the caller is decoupled from the processing time.",
      "This shift enabled concurrent report processing (multiple reports can be in flight without contending for the same request threads) and directly improved API responsiveness, since the synchronous part of the request became 'accept and enqueue' rather than 'compute and return'.",
      "Moving work onto Kafka consumers introduces a different failure surface: a consumer can crash mid-message, a downstream dependency can be temporarily unavailable, or a message can be malformed. The workflow handles this with retries for transient failures, Dead Letter Topics (DLTs) for messages that exhaust their retries, and automated email notifications when a report batch ultimately fails — so a stuck job is visible instead of silent.",
      "The underlying principle: asynchronous processing doesn't remove failure, it changes where and how you have to handle it. Retries, DLTs, and alerting are what make 'enqueue and forget' actually safe to rely on.",
    ],
  },
  {
    slug: "idempotency-with-redis-setnx",
    title: "Idempotency with Redis SETNX: Making Retries Safe by Construction",
    tags: ["Idempotency", "Redis", "Distributed Systems"],
    readTime: "5 min",
    summary:
      "Why 'the client might retry' has to be a first-class assumption in payment systems, and how a Redis SETNX check turns duplicate submissions into a non-event.",
    content: [
      "In any system where a client can time out waiting for a response, retries are not an edge case — they're guaranteed to happen. For a payment gateway, an unhandled retry means a real risk of double-charging. The fix used in this payment gateway project is Redis SETNX-based idempotency: every payment request carries an idempotency key, and the service attempts to set that key in Redis only if it doesn't already exist.",
      "If the SETNX succeeds, this is treated as the first attempt, and the request proceeds. If it fails because the key already exists, this is recognized as a retry of a request already in flight or already completed, and the original result is returned instead of reprocessing the payment.",
      "This pattern works well specifically because Redis SETNX is atomic — there's no window where two concurrent retries could both believe they're the first attempt. It keeps duplicate detection out of the database's transaction path, which matters when the whole point is to keep the payment path fast under load.",
      "Idempotency keys pair naturally with the Transactional Outbox pattern and SAGA-based workflows used elsewhere in the same system: once retries are safe, at-least-once delivery and at-least-once event processing stop being a liability and just become the normal operating mode.",
    ],
  },
  {
    slug: "saga-and-outbox",
    title: "SAGA and the Transactional Outbox: Consistency Without Distributed Transactions",
    tags: ["SAGA", "Transactional Outbox", "Microservices"],
    readTime: "6 min",
    summary:
      "Two patterns that show up together constantly in microservice payment flows, and why they solve two different halves of the same consistency problem.",
    content: [
      "Once a payment workflow spans more than one service, a classic distributed transaction (two-phase commit across services) becomes impractical — it couples services' availability together and doesn't play well with the kind of independent scaling and deployment microservices are meant to enable. SAGA-based workflows are the alternative used in this payment gateway: a payment is modeled as a sequence of local transactions, each with a defined compensating action, so a failure partway through unwinds the prior steps instead of leaving the system in an inconsistent state.",
      "SAGA solves consistency across services. The Transactional Outbox pattern solves a narrower but easy-to-miss problem: consistency between a service's own database and the events it publishes about that data. Without it, a service that writes to its database and then publishes a Kafka event as two separate operations can end up in a state where the write succeeds but the publish fails (or vice versa) — a silent, hard-to-debug class of bug.",
      "The Outbox pattern fixes this by writing the state change and the outbound event to the same local database transaction, then using a relay process to read unpublished events and deliver them to Kafka. The database transaction is the single source of truth; the event delivery becomes an at-least-once operation that downstream consumers need to treat idempotently — which is exactly where Redis SETNX-based idempotency on the consuming side comes back into play.",
      "Together, these two patterns cover both halves of the problem: SAGA handles 'what happens across services when a step fails,' and Outbox handles 'how do we guarantee an event is published if and only if the data change it describes actually happened.'",
    ],
  },
];

export const skills = {
  "Languages & Core CS": [
    "Java",
    "Data Structures & Algorithms",
    "OOP",
    "Operating Systems",
    "DBMS",
  ],
  "Backend & Distributed Systems": [
    "Spring Boot",
    "Spring Data JPA",
    "Hibernate",
    "REST APIs",
    "Microservices",
    "Spring WebFlux",
    "Kafka",
    "Redis",
    "Caching",
    "Concurrency",
    "Multithreading",
    "CompletableFuture",
    "Resilience4j",
    "System Design",
  ],
  "Databases, Infrastructure & Tools": [
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Jenkins (CI/CD)",
    "Git",
  ],
};

export const education = {
  school: "BIT Mesra",
  location: "Ranchi, India",
  degree: "B.Tech in Information Technology",
  gpa: "8.60/10",
  period: "2019 – 2023",
};

export const achievements = [
  "Received “Spot” and “Newbie” Awards at Societe Generale for strong performance and contributions.",
  "Secured National Rank 844 in CODEKAZE 2021 among 200,000+ participants.",
  "Scored in the top 1 percentile in JEE Main among 1 million+ candidates.",
  "Awarded the merit-based GP Birla Scholarship at BIT Mesra, covering 50% of tuition fees.",
];
