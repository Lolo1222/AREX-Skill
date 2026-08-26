# First-Stage Retrieval

## When To Read

Requests in the First-Stage Retrieval family of the Information Retrieval area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on first-stage retrieval.

## Repo Skill Options

<!-- DISCO_SCENARIO:first-stage-retrieval:START -->
### `bm25s`

Role: Use bm25s for sparse lexical retrieval: tokenize text, build and query BM25 indexes, persist or memory-map them, run the high-level or bm25 CLI workflows, and diagnose optional acceleration and integrations.
Read when: The request names `bm25s` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: acceleration and selection, core indexing retrieval, high level and cli, hub mcp and evaluation, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bm25s/SKILL.md`, `bm25s/sub-skills/acceleration-and-selection/`, `bm25s/sub-skills/core-indexing-retrieval/`, `bm25s/sub-skills/high-level-and-cli/`, `bm25s/sub-skills/hub-mcp-and-evaluation/`, `bm25s/sub-skills/persistence-and-corpus-io/`, `bm25s/references/repo-provenance.md`.

### `deepxiv-sdk`

Role: Use the DeepXiv SDK for citation-aware academic and web research through its Python Reader, deepxiv CLI, progressive paper APIs, optional local LangGraph agent, PMC, bioRxiv/medRxiv, and trending workflows.
Read when: The request names `deepxiv-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and operations, optional local agent, and reader and paper research.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepxiv-sdk/SKILL.md`, `deepxiv-sdk/sub-skills/cli-and-operations/`, `deepxiv-sdk/sub-skills/optional-local-agent/`, `deepxiv-sdk/sub-skills/reader-and-paper-research/`, `deepxiv-sdk/references/repo-provenance.md`, `deepxiv-sdk/references/troubleshooting.md`.

### `gensim`

Role: Guides Gensim topic modelling, document indexing, embeddings, similarity retrieval, downloader, and script workflows for Python NLP and IR tasks.
Read when: The request names `gensim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: corpora and vector spaces, data and cli utilities, embeddings and phrases, similarity and search, and topic modeling and transformations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gensim/SKILL.md`, `gensim/sub-skills/corpora-and-vector-spaces/`, `gensim/sub-skills/data-and-cli-utilities/`, `gensim/sub-skills/embeddings-and-phrases/`, `gensim/sub-skills/similarity-and-search/`, `gensim/sub-skills/topic-modeling-and-transformations/`, `gensim/references/package-overview.md`.

### `gerev`

Role: Route Gerev tasks across connector setup, search/indexing, and source or Docker runtime workflows.
Read when: The request names `gerev` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data source connectors, deployment runtime, and search indexing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gerev/SKILL.md`, `gerev/sub-skills/data-source-connectors/`, `gerev/sub-skills/deployment-runtime/`, `gerev/sub-skills/search-indexing/`, `gerev/references/deployment-runtime.md`, `gerev/references/frontend-api.md`.

### `lmops`

Role: Route LMOps paper-code workflows for prompt optimization, retrieval, adaptation, distillation, experiential learning, RAG, and LLM acceleration.
Read when: The request names `lmops` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: adaptation and training, distillation and post training, example retrieval, prompt optimization, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lmops/SKILL.md`, `lmops/sub-skills/adaptation-and-training/`, `lmops/sub-skills/distillation-and-post-training/`, `lmops/sub-skills/example-retrieval/`, `lmops/sub-skills/prompt-optimization/`, `lmops/sub-skills/rag-and-acceleration/`, `lmops/references/project-index.md`.

### `marqo`

Role: Marqo AI-native search service workflows for HTTP APIs, indexes, Vespa schemas, search/ranking, inference/model services, and local repository development.
Read when: The request names `marqo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: documents and api, index and vespa, inference and models, local development, and search and ranking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `marqo/SKILL.md`, `marqo/sub-skills/documents-and-api/`, `marqo/sub-skills/index-and-vespa/`, `marqo/sub-skills/inference-and-models/`, `marqo/sub-skills/local-development/`, `marqo/sub-skills/search-and-ranking/`, `marqo/references/package-map.md`.

### `pixelrag`

Role: Use PixelRAG for visual document RAG: screenshot capture, visual index building, FAISS/Qdrant serving, evaluation reproduction, and LoRA training/data workflows.
Read when: The request names `pixelrag` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation reproduction, index build, render capture, serve search, and training and data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pixelrag/SKILL.md`, `pixelrag/sub-skills/evaluation-reproduction/`, `pixelrag/sub-skills/index-build/`, `pixelrag/sub-skills/render-capture/`, `pixelrag/sub-skills/serve-search/`, `pixelrag/sub-skills/training-and-data/`, `pixelrag/references/agent-integration.md`.

### `rank-bm25`

Role: Guides tokenized lexical document retrieval with the rank_bm25 Python package, including BM25Okapi, BM25L, BM25Plus, full-corpus scoring, top-n retrieval, batch scoring, and input troubleshooting.
Read when: The request names `rank-bm25` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rank-bm25/SKILL.md`, `rank-bm25/references/api-reference.md`, `rank-bm25/references/repo-provenance.md`, `rank-bm25/references/troubleshooting.md`, `rank-bm25/references/workflows.md`, `rank-bm25/scripts/smoke_rank_bm25.py`.

### `semantra`

Role: Guides Semantra semantic-search CLI, local document indexing, embedding model selection, and interactive web search workflows.
Read when: The request names `semantra` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: document indexing, interactive search, and models and embeddings.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `semantra/SKILL.md`, `semantra/sub-skills/document-indexing/`, `semantra/sub-skills/interactive-search/`, `semantra/sub-skills/models-and-embeddings/`, `semantra/references/cli-and-server-reference.md`, `semantra/references/repo-provenance.md`.

### `simpletransformers`

Role: Use Simple Transformers package workflows for NLP classification, NER, QA, generation, T5, Seq2Seq, retrieval, representations, data validation, and troubleshooting.
Read when: The request names `simpletransformers` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, generative workflows, retrieval representation, and token and qa.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `simpletransformers/SKILL.md`, `simpletransformers/sub-skills/classification/`, `simpletransformers/sub-skills/generative-workflows/`, `simpletransformers/sub-skills/retrieval-representation/`, `simpletransformers/sub-skills/token-and-qa/`, `simpletransformers/references/cli-and-viewer.md`.

### `text2vec`

Role: Operate text2vec for text embeddings, similarity search, model fine-tuning, evaluation, and serving without reopening the source repository.
Read when: The request names `text2vec` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embeddings, evaluation benchmarks, serving deployment, similarity search, and training finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `text2vec/SKILL.md`, `text2vec/sub-skills/embeddings/`, `text2vec/sub-skills/evaluation-benchmarks/`, `text2vec/sub-skills/serving-deployment/`, `text2vec/sub-skills/similarity-search/`, `text2vec/sub-skills/training-finetuning/`, `text2vec/references/installation.md`.

### `ultra-rag`

Role: Routes UltraRAG pipeline orchestration, MCP server workflows, and the UI/backend stack.
Read when: The request names `ultra-rag` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: pipelines, servers, and ui and storage.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ultra-rag/SKILL.md`, `ultra-rag/sub-skills/pipelines/`, `ultra-rag/sub-skills/servers/`, `ultra-rag/sub-skills/ui-and-storage/`, `ultra-rag/references/overview.md`, `ultra-rag/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:first-stage-retrieval:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
