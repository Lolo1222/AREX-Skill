# Natural Language Processing — General

## When To Read

Natural Language Processing requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:natural-language-processing-general:START -->
### `argos-translate`

Role: Routes Argos Translate workflows for offline machine translation, package installation, CLI usage, runtime settings, and troubleshooting.
Read when: The request names `argos-translate` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: package management and translation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `argos-translate/SKILL.md`, `argos-translate/sub-skills/package-management/`, `argos-translate/sub-skills/translation/`, `argos-translate/references/api-reference.md`, `argos-translate/references/cli-reference.md`, `argos-translate/references/configuration.md`.

### `asrt-speech-recognition`

Role: Operate ASRT SpeechRecognition Chinese ASR data, acoustic models, pinyin language model, and serving clients.
Read when: The request names `asrt-speech-recognition` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: acoustic models, data and features, language model, and serving clients.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `asrt-speech-recognition/SKILL.md`, `asrt-speech-recognition/sub-skills/acoustic-models/`, `asrt-speech-recognition/sub-skills/data-and-features/`, `asrt-speech-recognition/sub-skills/language-model/`, `asrt-speech-recognition/sub-skills/serving-clients/`, `asrt-speech-recognition/references/installation-and-runtime.md`.

### `attention-is-all-you-need-pytorch`

Role: Use jadore801120 attention-is-all-you-need-pytorch for Transformer architecture inspection, preprocessing, training, and checkpoint translation workflows.
Read when: The request names `attention-is-all-you-need-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model architecture, training, and translation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `attention-is-all-you-need-pytorch/SKILL.md`, `attention-is-all-you-need-pytorch/sub-skills/data-preparation/`, `attention-is-all-you-need-pytorch/sub-skills/model-architecture/`, `attention-is-all-you-need-pytorch/sub-skills/training/`, `attention-is-all-you-need-pytorch/sub-skills/translation/`, `attention-is-all-you-need-pytorch/references/package-overview.md`.

### `bert-pytorch`

Role: Use BERT-pytorch for corpus preparation, vocabulary building, and tiny BERT pretraining workflows.
Read when: The request names `bert-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bert-pytorch/SKILL.md`, `bert-pytorch/sub-skills/data-preparation/`, `bert-pytorch/sub-skills/training/`, `bert-pytorch/references/api-reference.md`, `bert-pytorch/references/cli-reference.md`, `bert-pytorch/references/repo-provenance.md`.

### `bertopic`

Role: Route BERTopic topic modeling, embedding, vectorizer, labeling, visualization, and serialization workflows.
Read when: The request names `bertopic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis visualization, embeddings backends, representations labeling, serialization, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bertopic/SKILL.md`, `bertopic/sub-skills/analysis-visualization/`, `bertopic/sub-skills/embeddings-backends/`, `bertopic/sub-skills/representations-labeling/`, `bertopic/sub-skills/serialization/`, `bertopic/sub-skills/topic-modeling/`, `bertopic/references/repo-provenance.md`.

### `chatterbot`

Role: Operate ChatterBot conversational dialog engine workflows, including chatbot setup, training, logic adapters, storage backends, Django integration, and optional LLM adapters.
Read when: The request names `chatterbot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core chatbot, django integration, logic adapters, storage adapters, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chatterbot/SKILL.md`, `chatterbot/sub-skills/core-chatbot/`, `chatterbot/sub-skills/django-integration/`, `chatterbot/sub-skills/logic-adapters/`, `chatterbot/sub-skills/storage-adapters/`, `chatterbot/sub-skills/training/`, `chatterbot/references/installation-and-extras.md`.

### `chinese-bert-wwm`

Role: Route Chinese-BERT-wwm model loading, model selection, benchmark data, and troubleshooting workflows for HFL Chinese BERT-family resources.
Read when: The request names `chinese-bert-wwm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and benchmarks, model loading, and task selection and finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chinese-bert-wwm/SKILL.md`, `chinese-bert-wwm/sub-skills/data-and-benchmarks/`, `chinese-bert-wwm/sub-skills/model-loading/`, `chinese-bert-wwm/sub-skills/task-selection-and-finetuning/`, `chinese-bert-wwm/references/model-family-overview.md`, `chinese-bert-wwm/references/repo-provenance.md`.

### `chonkie`

Role: Use Chonkie for text/document chunking, pipelines, embeddings, CLI/API serving, and storage integrations.
Read when: The request names `chonkie` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: chunking and types, embeddings and generative, integrations and storage, interfaces and deployment, and pipelines and processing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chonkie/SKILL.md`, `chonkie/sub-skills/chunking-and-types/`, `chonkie/sub-skills/embeddings-and-generative/`, `chonkie/sub-skills/integrations-and-storage/`, `chonkie/sub-skills/interfaces-and-deployment/`, `chonkie/sub-skills/pipelines-and-processing/`, `chonkie/references/package-overview.md`.

### `clip-as-service`

Role: Guides CLIP-as-service client, server, and CLIP search workflows for text/image embeddings, cross-modal ranking, and retrieval services.
Read when: The request names `clip-as-service` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: client api, search retrieval, and server runtime.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `clip-as-service/SKILL.md`, `clip-as-service/sub-skills/client-api/`, `clip-as-service/sub-skills/search-retrieval/`, `clip-as-service/sub-skills/server-runtime/`, `clip-as-service/references/install-and-package-map.md`, `clip-as-service/references/repo-provenance.md`.

### `flair`

Role: Use Flair for NLP annotation, embeddings, text/sequence model prediction, corpus loading, training/fine-tuning, HunFlair biomedical NER/linking, and production troubleshooting.
Read when: The request names `flair` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: biomedical nlp, embeddings and optimization, tagging and annotations, and training and datasets.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `flair/SKILL.md`, `flair/sub-skills/biomedical-nlp/`, `flair/sub-skills/embeddings-and-optimization/`, `flair/sub-skills/tagging-and-annotations/`, `flair/sub-skills/training-and-datasets/`, `flair/references/api-overview.md`.

### `gensim`

Role: Guides Gensim topic modelling, document indexing, embeddings, similarity retrieval, downloader, and script workflows for Python NLP and IR tasks.
Read when: The request names `gensim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: corpora and vector spaces, data and cli utilities, embeddings and phrases, similarity and search, and topic modeling and transformations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gensim/SKILL.md`, `gensim/sub-skills/corpora-and-vector-spaces/`, `gensim/sub-skills/data-and-cli-utilities/`, `gensim/sub-skills/embeddings-and-phrases/`, `gensim/sub-skills/similarity-and-search/`, `gensim/sub-skills/topic-modeling-and-transformations/`, `gensim/references/package-overview.md`.

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

### `ltp`

Role: Guides LTP Chinese NLP package workflows for Python pipelines, legacy perceptron models, optional training data/configs, and Rust/C bindings.
Read when: The request names `ltp` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: legacy extension, python pipeline, rust bindings, and training and data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ltp/SKILL.md`, `ltp/sub-skills/legacy-extension/`, `ltp/sub-skills/python-pipeline/`, `ltp/sub-skills/rust-bindings/`, `ltp/sub-skills/training-and-data/`, `ltp/references/model-catalog-and-tasks.md`.

### `nltk`

Role: Use NLTK for classical natural-language processing in Python: install the package and data, tokenize and tag text, stem or lemmatize, build grammars and parse trees, train classical models, score metrics, and work with translation alignments.
Read when: The request names `nltk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and downloader, grammar parse semantics, ml metrics and translation, and tokenize tag stem.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nltk/SKILL.md`, `nltk/sub-skills/data-and-downloader/`, `nltk/sub-skills/grammar-parse-semantics/`, `nltk/sub-skills/ml-metrics-and-translation/`, `nltk/sub-skills/tokenize-tag-stem/`, `nltk/references/native-verification.md`.

### `opennmt-py`

Role: Routes OpenNMT-py workflows for data preparation, training, inference, server deployment, and checkpoint/model conversion.
Read when: The request names `opennmt-py` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion, data preparation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opennmt-py/SKILL.md`, `opennmt-py/sub-skills/conversion/`, `opennmt-py/sub-skills/data-preparation/`, `opennmt-py/sub-skills/inference/`, `opennmt-py/sub-skills/training/`, `opennmt-py/references/cli-reference.md`.

### `openprompt`

Role: Route OpenPrompt prompt-learning, dataset/config, template/verbalizer, and training/generation workflows from a single repo skill.
Read when: The request names `openprompt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and config workflows, pipeline basics, template verbalizer design, and training and generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openprompt/SKILL.md`, `openprompt/sub-skills/data-and-config-workflows/`, `openprompt/sub-skills/pipeline-basics/`, `openprompt/sub-skills/template-verbalizer-design/`, `openprompt/sub-skills/training-and-generation/`, `openprompt/references/package-overview.md`.

### `quark0-darts`

Role: Use the original DARTS research code for differentiable architecture search, CNN/RNN genotypes, CIFAR/ImageNet/PTB/WT2 workflows, and legacy PyTorch troubleshooting.
Read when: The request names `quark0-darts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cnn architectures, genotypes and visualization, and rnn language modeling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `quark0-darts/SKILL.md`, `quark0-darts/sub-skills/cnn-architectures/`, `quark0-darts/sub-skills/genotypes-and-visualization/`, `quark0-darts/sub-skills/rnn-language-modeling/`, `quark0-darts/references/data-and-checkpoints.md`, `quark0-darts/references/legacy-runtime.md`.

### `semantra`

Role: Guides Semantra semantic-search CLI, local document indexing, embedding model selection, and interactive web search workflows.
Read when: The request names `semantra` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: document indexing, interactive search, and models and embeddings.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `semantra/SKILL.md`, `semantra/sub-skills/document-indexing/`, `semantra/sub-skills/interactive-search/`, `semantra/sub-skills/models-and-embeddings/`, `semantra/references/cli-and-server-reference.md`, `semantra/references/repo-provenance.md`.

### `seq2seq-couplet`

Role: Routes training, inference, and Flask serving workflows for the TensorFlow seq2seq couplet project.
Read when: The request names `seq2seq-couplet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `seq2seq-couplet/SKILL.md`, `seq2seq-couplet/sub-skills/inference/`, `seq2seq-couplet/sub-skills/training/`, `seq2seq-couplet/references/dependencies.md`, `seq2seq-couplet/references/licensing.md`, `seq2seq-couplet/references/model-overview.md`.

### `stanza`

Role: Use Stanza for neural NLP pipelines, CoreNLP client workflows, CoNLL-U documents, training data, and demos.
Read when: The request names `stanza` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: corenlp client, documents and conllu, pipelines and resources, training and data prep, and visualization and demos.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stanza/SKILL.md`, `stanza/sub-skills/corenlp-client/`, `stanza/sub-skills/documents-and-conllu/`, `stanza/sub-skills/pipelines-and-resources/`, `stanza/sub-skills/training-and-data-prep/`, `stanza/sub-skills/visualization-and-demos/`, `stanza/references/package-overview.md`.

### `synonyms`

Role: Chinese synonyms, word/vector similarity, segmentation, keyword extraction, and model troubleshooting workflows for the chatopera/Synonyms package.
Read when: The request names `synonyms` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `synonyms/SKILL.md`, `synonyms/references/api-reference.md`, `synonyms/references/model-and-environment.md`, `synonyms/references/repo-provenance.md`, `synonyms/references/troubleshooting.md`, `synonyms/references/workflows.md`.

### `text-classification`

Role: Routes legacy TensorFlow 1.x text-classification workflows for brightmart/text_classification, including raw data preparation, classic baselines, seq2seq and memory models, relation workflows, and ensemble post-processing.
Read when: The request names `text-classification` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification models, data preparation, relation and ensemble workflows, and sequence and memory models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `text-classification/SKILL.md`, `text-classification/sub-skills/classification-models/`, `text-classification/sub-skills/data-preparation/`, `text-classification/sub-skills/relation-and-ensemble-workflows/`, `text-classification/sub-skills/sequence-and-memory-models/`, `text-classification/references/model-overview.md`.

### `text2vec`

Role: Operate text2vec for text embeddings, similarity search, model fine-tuning, evaluation, and serving without reopening the source repository.
Read when: The request names `text2vec` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embeddings, evaluation benchmarks, serving deployment, similarity search, and training finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `text2vec/SKILL.md`, `text2vec/sub-skills/embeddings/`, `text2vec/sub-skills/evaluation-benchmarks/`, `text2vec/sub-skills/serving-deployment/`, `text2vec/sub-skills/similarity-search/`, `text2vec/sub-skills/training-finetuning/`, `text2vec/references/installation.md`.

### `textgenrnn`

Role: Routes agents through textgenrnn generation, training, and embedding-analysis workflows for pretrained samples, custom text generation, fine-tuning, context labels, and similarity checks.
Read when: The request names `textgenrnn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embedding analysis, generation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `textgenrnn/SKILL.md`, `textgenrnn/sub-skills/embedding-analysis/`, `textgenrnn/sub-skills/generation/`, `textgenrnn/sub-skills/training/`, `textgenrnn/references/installation-and-compatibility.md`, `textgenrnn/references/model-overview.md`.

### `x-transformers`

Role: Route x-transformers transformer construction, sequence wrappers, and recipe workflows through self-contained sub-skills.
Read when: The request names `x-transformers` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core models, sequence workflows, and training recipes.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `x-transformers/SKILL.md`, `x-transformers/sub-skills/core-models/`, `x-transformers/sub-skills/sequence-workflows/`, `x-transformers/sub-skills/training-recipes/`, `x-transformers/references/api-reference.md`, `x-transformers/references/compatibility.md`.

<!-- DISCO_SCENARIO:natural-language-processing-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
