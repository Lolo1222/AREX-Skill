# Information Extraction

## When To Read

Requests in the Information Extraction family of the Natural Language Processing area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on information extraction.

## Repo Skill Options

<!-- DISCO_SCENARIO:information-extraction:START -->
### `agriculture-knowledge-graph`

Role: Operate the Agriculture_KnowledgeGraph agricultural Neo4j graph, Django demo, entity labeling, crawler, and relation-extraction workflows.
Read when: The request names `agriculture-knowledge-graph` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: crawlers and wikidata pipelines, entity labeling and ner, graph query and data management, relation extraction pipeline, and web app service.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agriculture-knowledge-graph/SKILL.md`, `agriculture-knowledge-graph/sub-skills/crawlers-and-wikidata-pipelines/`, `agriculture-knowledge-graph/sub-skills/entity-labeling-and-ner/`, `agriculture-knowledge-graph/sub-skills/graph-query-and-data-management/`, `agriculture-knowledge-graph/sub-skills/relation-extraction-pipeline/`, `agriculture-knowledge-graph/sub-skills/web-app-service/`, `agriculture-knowledge-graph/references/architecture-and-workflows.md`.

### `cs230-code-examples`

Role: Routes CS230 code-example requests to the correct PyTorch or TensorFlow vision and NLP workflows for SIGNS image classification and named-entity recognition.
Read when: The request names `cs230-code-examples` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: pytorch examples and tensorflow examples.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cs230-code-examples/SKILL.md`, `cs230-code-examples/sub-skills/pytorch-examples/`, `cs230-code-examples/sub-skills/tensorflow-examples/`, `cs230-code-examples/references/repo-provenance.md`, `cs230-code-examples/references/troubleshooting.md`, `cs230-code-examples/scripts/check_env.py`.

### `deepke`

Role: Route DeepKE knowledge extraction workflows across supervised extraction, data prep, triples, LLMs, and MCP tools.
Read when: The request names `deepke` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, llm workflows, mcp tools, supervised extraction, and triple extraction.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepke/SKILL.md`, `deepke/sub-skills/data-preparation/`, `deepke/sub-skills/llm-workflows/`, `deepke/sub-skills/mcp-tools/`, `deepke/sub-skills/supervised-extraction/`, `deepke/sub-skills/triple-extraction/`, `deepke/references/repo-overview.md`.

### `deeppavlov`

Role: DeepPavlov package routing for config-driven NLP workflows, model-family selection, and serving.
Read when: The request names `deeppavlov` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: pipelines, retrieval qa, serving, and text models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deeppavlov/SKILL.md`, `deeppavlov/sub-skills/pipelines/`, `deeppavlov/sub-skills/retrieval-qa/`, `deeppavlov/sub-skills/serving/`, `deeppavlov/sub-skills/text-models/`, `deeppavlov/references/installation-and-cli.md`.

### `flair`

Role: Use Flair for NLP annotation, embeddings, text/sequence model prediction, corpus loading, training/fine-tuning, HunFlair biomedical NER/linking, and production troubleshooting.
Read when: The request names `flair` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: biomedical nlp, embeddings and optimization, tagging and annotations, and training and datasets.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `flair/SKILL.md`, `flair/sub-skills/biomedical-nlp/`, `flair/sub-skills/embeddings-and-optimization/`, `flair/sub-skills/tagging-and-annotations/`, `flair/sub-skills/training-and-datasets/`, `flair/references/api-overview.md`.

### `flashtext`

Role: Routes FlashText tasks for keyword extraction, replacement, fuzzy matching, keyword loading, and keyword-inspection workflows.
Read when: The request names `flashtext` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `flashtext/SKILL.md`, `flashtext/references/api-reference.md`, `flashtext/references/data-formats.md`, `flashtext/references/repo-provenance.md`, `flashtext/references/troubleshooting.md`, `flashtext/references/workflows.md`.

### `hanlp`

Role: Routes agents using HanLP for multilingual NLP via native Python models, RESTful clients, Document outputs, custom dictionaries, and training or repository-maintenance workflows.
Read when: The request names `hanlp` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: document and data, native workflows, restful clients, rules and trie, and training and development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hanlp/SKILL.md`, `hanlp/sub-skills/document-and-data/`, `hanlp/sub-skills/native-workflows/`, `hanlp/sub-skills/restful-clients/`, `hanlp/sub-skills/rules-and-trie/`, `hanlp/sub-skills/training-and-development/`, `hanlp/references/installation-and-configuration.md`.

### `jionlp`

Role: Chinese NLP preprocessing, parsing, augmentation, and language-analysis router for JioNLP.
Read when: The request names `jionlp` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: annotation and dataset tools, dictionaries and language analysis, parsing and normalization, text augmentation, and text cleaning and extraction.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `jionlp/SKILL.md`, `jionlp/sub-skills/annotation-and-dataset-tools/`, `jionlp/sub-skills/dictionaries-and-language-analysis/`, `jionlp/sub-skills/parsing-and-normalization/`, `jionlp/sub-skills/text-augmentation/`, `jionlp/sub-skills/text-cleaning-and-extraction/`, `jionlp/references/cli-reference.md`.

### `langextract`

Role: Use LangExtract to extract structured data from unstructured text, configure model providers, save/visualize grounded outputs, and author provider plugins.
Read when: The request names `langextract` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: extraction, provider plugins, providers, and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `langextract/SKILL.md`, `langextract/sub-skills/extraction/`, `langextract/sub-skills/provider-plugins/`, `langextract/sub-skills/providers/`, `langextract/sub-skills/visualization/`, `langextract/references/api-map.md`.

### `logparser`

Role: Routes agents through Logparser log-template extraction, parser selection, benchmark evaluation, and special parser dependency workflows.
Read when: The request names `logparser` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmarking, parsing, and specialized parsers.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `logparser/SKILL.md`, `logparser/sub-skills/benchmarking/`, `logparser/sub-skills/parsing/`, `logparser/sub-skills/specialized-parsers/`, `logparser/references/data-formats.md`, `logparser/references/parser-catalog.md`.

### `openmed`

Role: Route OpenMed local-first clinical NLP, PHI de-identification, healthcare interoperability, model runtime, multimodal intake, and privacy-risk workflows.
Read when: The request names `openmed` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clinical extraction grounding, deidentification privacy, interoperability serving, model runtimes mobile, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openmed/SKILL.md`, `openmed/sub-skills/clinical-extraction-grounding/`, `openmed/sub-skills/deidentification-privacy/`, `openmed/sub-skills/interoperability-serving/`, `openmed/sub-skills/model-runtimes-mobile/`, `openmed/sub-skills/multimodal-document-intake/`, `openmed/references/install-and-configuration.md`.

### `presidio`

Role: Use Presidio for PII and PHI detection, anonymization, structured de-identification, image/DICOM redaction, and CLI scans.
Read when: The request names `presidio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analyze text, anonymize text, cli scans, image redaction, and structured data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `presidio/SKILL.md`, `presidio/sub-skills/analyze-text/`, `presidio/sub-skills/anonymize-text/`, `presidio/sub-skills/cli-scans/`, `presidio/sub-skills/image-redaction/`, `presidio/sub-skills/structured-data/`, `presidio/references/install-and-models.md`.

### `scispacy`

Role: Routes scispaCy biomedical spaCy component workflows, entity-linking workflows, and project data/evaluation workflows.
Read when: The request names `scispacy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: entity linking, pipeline components, and project workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scispacy/SKILL.md`, `scispacy/sub-skills/entity-linking/`, `scispacy/sub-skills/pipeline-components/`, `scispacy/sub-skills/project-workflows/`, `scispacy/references/installation.md`, `scispacy/references/repo-provenance.md`.

### `snips-nlu`

Role: Use Snips NLU for intent parsing, slot filling, dataset/resource preparation, engine API workflows, CLI training/parsing, and troubleshooting.
Read when: The request names `snips-nlu` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli workflows, dataset and resources, and engine api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `snips-nlu/SKILL.md`, `snips-nlu/sub-skills/cli-workflows/`, `snips-nlu/sub-skills/dataset-and-resources/`, `snips-nlu/sub-skills/engine-api/`, `snips-nlu/references/installation-and-resources.md`, `snips-nlu/references/repo-provenance.md`.

### `spacy`

Role: Use spaCy for install checks, document processing, pipeline components, training and CLI workflows, and project workflows.
Read when: The request names `spacy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: documents and visualization, install and inspect, pipeline components, project workflows, and training and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `spacy/SKILL.md`, `spacy/sub-skills/documents-and-visualization/`, `spacy/sub-skills/install-and-inspect/`, `spacy/sub-skills/pipeline-components/`, `spacy/sub-skills/project-workflows/`, `spacy/sub-skills/training-and-cli/`, `spacy/references/package-overview.md`.

### `stanza`

Role: Use Stanza for neural NLP pipelines, CoreNLP client workflows, CoNLL-U documents, training data, and demos.
Read when: The request names `stanza` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: corenlp client, documents and conllu, pipelines and resources, training and data prep, and visualization and demos.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stanza/SKILL.md`, `stanza/sub-skills/corenlp-client/`, `stanza/sub-skills/documents-and-conllu/`, `stanza/sub-skills/pipelines-and-resources/`, `stanza/sub-skills/training-and-data-prep/`, `stanza/sub-skills/visualization-and-demos/`, `stanza/references/package-overview.md`.

<!-- DISCO_SCENARIO:information-extraction:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
