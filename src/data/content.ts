// All facts below are sourced directly from Md Shahid Ali Khan's resume.
// Nothing here is invented — metrics, dates, and scope are quoted as stated.

export const RESUME_PATH = `${import.meta.env.BASE_URL}resume/Md_Shahid_Khan_Resume.pdf`;

export const profile = {
  name: "Md Shahid Ali Khan",
  role: "Backend Software Engineer",
  focus: "Distributed Systems · Financial Services",
  phone: "8809682225",
  email: "2000shahid2019@gmail.com",
  linkedin: "https://linkedin.com/in/mdshahidalikhan",
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
    label: "Cache-hit read latency",
    before: "50ms",
    after: "<5ms",
    beforeVal: 50,
    afterVal: 5,
    unit: "ms",
    detail: "90%+ cache hit ratio on the distributed workflow platform.",
  },
  {
    label: "Rate limiter throughput",
    before: null,
    after: "4K+ RPS",
    beforeVal: null,
    afterVal: 4000,
    unit: "rps",
    detail: "70ms P95 / 120ms P99 latency at 5x normal load — Redis/Lua atomic rate limiting.",
  },
  {
    label: "Leader failover time",
    before: null,
    after: "5–10s",
    beforeVal: null,
    afterVal: 10,
    unit: "s",
    detail: "After forced leader pod termination, via leader election.",
  },
  {
    label: "Jobs processed, zero duplicate side effects",
    before: null,
    after: "10,000+",
    beforeVal: null,
    afterVal: 10000,
    unit: "jobs",
    detail: "Across 3–5 workers, including forced retries — idempotent consumers.",
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
    slug: "distributed-workflow-platform",
    name: "Distributed Workflow & Job Processing Platform",
    type: "Personal Project",
    tagline:
      "A fault-tolerant workflow platform on a real Kubernetes cluster — rate limiting, caching, distributed locking, leader election, and async job processing, all failure-tested.",
    stack: [
      "Java 25",
      "Spring Boot",
      "Redis",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Lua",
    ],
    featured: true,
    bullets: [
      "Built a fault-tolerant distributed workflow platform on a local 3-node Kubernetes (Kind) cluster, combining Redis-backed rate limiting, caching, distributed locking, leader election, and Kafka-based asynchronous job processing.",
      "Implemented Redis/Lua-based atomic rate limiting, sustaining 4K+ RPS with 70ms P95 / 120ms P99 latency at 5x normal load; achieved a 90%+ cache hit ratio, reducing read latency from 50ms to under 5ms on cache hits.",
      "Built a Kafka-based job processing pipeline with at-least-once delivery, idempotent consumers, exponential backoff, and DLQ recovery, processing 10,000+ jobs across 3–5 workers without duplicate side effects during forced retries.",
      "Implemented lease-based distributed locks with fencing tokens to prevent stale-lock writes and leader election for cluster-wide coordination, achieving 5–10 second failover after leader pod termination.",
      "Performed resilience and failure-injection testing by simulating pod, Redis, and Kafka failures, validating job recovery, lock handoff, leader re-election, and rate-limit/cache consistency.",
      "Added Zipkin distributed tracing across the rate-limit, cache, job-queue, locking, and leader-election workflows to identify latency bottlenecks and failure points.",
    ],
    caseStudy: {
      problem:
        "A distributed workflow platform has to stay correct under conditions a single-node system never faces: multiple pods racing for the same lock, a leader pod dying mid-coordination, a worker crashing after partially processing a job, and traffic spikes that would otherwise overwhelm downstream dependencies. The goal was to build and prove out these failure modes on a real multi-node cluster rather than reason about them on paper — a local 3-node Kubernetes (Kind) cluster, so pod kills, network partitions, and dependency outages are actual events, not simulated ones.",
      architecture:
        "The platform layers five concerns on top of each other, each addressing a different way a distributed system drifts from correctness under load or failure. Requests first pass through a Redis/Lua-based atomic rate limiter, so limit-checking is a single atomic operation rather than a race-prone read-then-write. Reads that hit the cache are served from a Redis-backed cache layer tuned for a high hit ratio. Work that shouldn't block the caller is handed to a Kafka-based job processing pipeline with at-least-once delivery, consumed by 3–5 workers. Anything requiring cluster-wide coordination — a job that only one node should run, a resource only one node should touch — goes through lease-based distributed locks with fencing tokens, with leader election handling which node currently owns cluster-wide responsibilities. Zipkin distributed tracing runs across all five layers (rate-limit, cache, job-queue, locking, leader-election) so a slow or failing request can be traced to the specific layer responsible.",
      decisions: [
        {
          heading: "Atomic rate limiting via Redis + Lua",
          body: "Rate limiting logic (check count, compare to limit, increment) runs as a single Lua script executed atomically inside Redis, rather than as separate round-trips from the application. This removes the race window where two concurrent requests could both read a count below the limit and both be allowed through, which a naive read-then-write implementation would allow under concurrent load.",
        },
        {
          heading: "Idempotent consumers over exactly-once delivery",
          body: "Rather than trying to build exactly-once delivery — which is expensive and still leaky in practice — the job pipeline embraces at-least-once delivery from Kafka and makes consumers idempotent, so a message redelivered after a crash or a forced retry produces the same end state instead of a duplicate side effect.",
        },
        {
          heading: "Fencing tokens on distributed locks",
          body: "A lease-based lock alone isn't enough: a node can be paused (GC, scheduling delay) long enough for its lease to expire and be granted to another node, then wake up and write as if it still held the lock. Fencing tokens close this gap — each lock acquisition returns a monotonically increasing token, and the resource being protected rejects writes carrying an old token, so a stale writer physically cannot corrupt state even if it believes it still holds the lock.",
        },
        {
          heading: "Leader election for cluster-wide coordination",
          body: "Work that must run on exactly one node cluster-wide (not per-request, but per-cluster) is coordinated through leader election rather than external orchestration, so the cluster self-heals when the current leader pod is killed — a new leader is elected without manual intervention.",
        },
      ],
      failureScenarios: [
        {
          heading: "Leader pod terminated mid-coordination",
          body: "The leader pod is killed outright to simulate a crash. Leader election detects the loss and elects a new leader, with failover measured at 5–10 seconds — validated by deliberately terminating the leader pod, not assumed from the algorithm alone.",
        },
        {
          heading: "Worker crash during job processing",
          body: "A worker is killed mid-job to simulate a crash. Because Kafka delivery is at-least-once and consumers are idempotent, the job is safely redelivered and reprocessed by another worker without producing duplicate side effects — verified across 10,000+ processed jobs including forced retries.",
        },
        {
          heading: "Redis or Kafka dependency failure",
          body: "Redis and Kafka failures are injected directly (not just reasoned about) to validate that rate-limit/cache consistency and job recovery hold up when a core dependency actually goes down mid-flight, rather than only under happy-path conditions.",
        },
        {
          heading: "Stale lock writes after a paused node wakes up",
          body: "A node that held a lock, was paused long enough for its lease to expire, and then resumes execution attempts a write believing it's still the lock holder. The fencing token attached to that write is now stale relative to the current holder's token, and the write is rejected — lock handoff is validated directly rather than assumed correct.",
        },
      ],
      performance: [
        "Sustained 4K+ RPS through the rate limiter with 70ms P95 / 120ms P99 latency at 5x normal load.",
        "90%+ cache hit ratio, reducing read latency from 50ms to under 5ms on cache hits.",
        "10,000+ jobs processed across 3–5 workers with zero duplicate side effects during forced retries.",
        "5–10 second leader failover after forced leader pod termination.",
        "Zipkin distributed tracing across rate-limit, cache, job-queue, locking, and leader-election workflows to pinpoint latency bottlenecks.",
      ],
      tradeoffs: [
        {
          heading: "At-least-once + idempotency over exactly-once",
          body: "Choosing at-least-once delivery with idempotent consumers over building exactly-once semantics trades some consumer-side complexity (every handler must be safely re-runnable) for a simpler, more provably correct delivery guarantee at the messaging layer.",
        },
        {
          heading: "Fencing tokens add a check on every protected write",
          body: "Requiring the protected resource to validate a fencing token on every write adds a check that a simpler (but unsafe) lock design wouldn't need — the cost is one comparison per write, in exchange for eliminating an entire class of stale-writer corruption bugs.",
        },
        {
          heading: "Local Kind cluster over managed cloud Kubernetes",
          body: "Running on a local 3-node Kind cluster instead of a managed cloud cluster trades production-scale realism for the ability to run destructive failure injection (killing pods, cutting off dependencies) freely and repeatably without cost or blast-radius concerns.",
        },
      ],
      outcome:
        "A workflow platform where rate limiting, caching, job delivery, and cluster-wide coordination were not just designed for failure but actually broken on purpose — pods killed, Redis and Kafka taken down, nodes paused — with every one of those failure paths validated to recover correctly rather than assumed to.",
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
    slug: "atomic-rate-limiting-redis-lua",
    title: "Atomic Rate Limiting with Redis and Lua",
    tags: ["Redis", "Lua", "Distributed Systems"],
    readTime: "5 min",
    summary:
      "Why a naive check-then-increment rate limiter breaks under concurrency, and how running the whole check as one Lua script inside Redis fixes it.",
    content: [
      "A rate limiter that reads the current request count, compares it to a limit, and then increments the count as two separate operations has a race condition built in: under concurrent load, two requests can both read a count just under the limit, both decide they're allowed through, and both increment — silently letting more traffic through than the limit permits.",
      "The fix is to make the whole check-and-increment sequence atomic by running it as a single Lua script inside Redis. Redis executes Lua scripts atomically, so there's no window between the read and the write where another request can interleave — the limiter either admits a request and records it, or rejects it, as one indivisible operation.",
      "On the distributed workflow platform, this Redis/Lua-based rate limiter sustained 4K+ RPS with 70ms P95 / 120ms P99 latency at 5x normal load — figures that came from deliberately pushing the system past its normal operating point, not from an untested best case.",
      "The same atomicity principle shows up again in the platform's caching layer, which reached a 90%+ hit ratio and cut read latency from 50ms to under 5ms on cache hits — a reminder that most of the hard problems in this kind of system aren't about the individual operations being slow, they're about what happens when several of them try to happen at once.",
    ],
  },
  {
    slug: "idempotent-job-processing",
    title: "Idempotent Consumers: Making At-Least-Once Delivery Safe",
    tags: ["Kafka", "Idempotency", "Distributed Systems"],
    readTime: "5 min",
    summary:
      "Kafka guarantees at-least-once delivery, not exactly-once — here's how idempotent consumers turn that into a safe guarantee for a job processing pipeline.",
    content: [
      "Kafka's at-least-once delivery means a message can be redelivered — after a consumer crash, a rebalance, or a retry — and the pipeline has to be correct when that happens. The alternative, exactly-once delivery, is possible but expensive and still has sharp edges in practice. The job processing pipeline on the distributed workflow platform takes the more tractable path: accept at-least-once delivery from Kafka, and make every consumer idempotent, so redelivery produces the same end state instead of a duplicate side effect.",
      "In practice this means each job handler is written so that processing the same message twice is safe — whether that's an upsert instead of an insert, a check against previously-recorded state before acting, or a persisted result keyed by job ID that a redelivered message can just look up instead of recomputing.",
      "This was paired with exponential backoff for transient failures and Dead Letter Queue (DLQ) recovery for messages that exhaust their retries, across a pipeline of 3–5 workers. The whole design was validated directly: 10,000+ jobs were processed, including forced retries, with zero duplicate side effects — not inferred from the pattern, but observed under deliberate failure injection.",
      "The broader lesson: 'at-least-once' isn't a weaker guarantee to work around, it's the honest guarantee a distributed system can actually make — idempotency is what turns it into something you can build on safely.",
    ],
  },
  {
    slug: "distributed-locks-and-leader-election",
    title: "Fencing Tokens: The Part of Distributed Locking Most Implementations Skip",
    tags: ["Distributed Locking", "Leader Election", "System Design"],
    readTime: "6 min",
    summary:
      "A lease-based lock alone isn't safe against a paused node waking up late — fencing tokens are what actually close that gap.",
    content: [
      "A lease-based distributed lock — acquire a lock with a time-to-live, release it when done, let it expire if you crash — solves the obvious problem: a crashed node shouldn't hold a lock forever. But it leaves a subtler one open: a node can be paused (a long GC pause, a scheduling delay, a slow disk) for longer than the lease's TTL. While it's paused, the lease expires and another node is correctly granted the lock. When the first node resumes, it has no idea time has passed — it still believes it holds the lock, and can go ahead and write.",
      "Fencing tokens close this gap. Every time a lock is acquired, it comes with a monotonically increasing token. The resource being protected — not just the lock itself — checks that token on every write, and rejects any write carrying a token older than the last one it accepted. A paused node that wakes up late and tries to write with its old token gets rejected, even though it still believes it's the lock holder.",
      "On the distributed workflow platform, this was combined with leader election for cluster-wide coordination — work that should run on exactly one node across the whole cluster, not per-request. When the leader pod is killed outright, a new leader is elected automatically, with failover measured at 5–10 seconds under deliberate leader-termination testing.",
      "Both mechanisms were validated the same way: by actually breaking them. Pods were killed, not just reasoned about, to confirm lock handoff and leader re-election behave correctly under a real failure rather than an assumed one.",
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
