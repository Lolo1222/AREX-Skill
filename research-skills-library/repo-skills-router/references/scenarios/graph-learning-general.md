# Graph Learning — General

## When To Read

Graph Learning requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:graph-learning-general:START -->
### `cogdl`

Role: Routes CogDL graph-learning workflows for experiments, graph data, models, training wrappers, and pipeline apps.
Read when: The request names `cogdl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: experiments and cli, graph data and datasets, models layers and operators, pipelines and applications, and training wrappers and customization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cogdl/SKILL.md`, `cogdl/sub-skills/experiments-and-cli/`, `cogdl/sub-skills/graph-data-and-datasets/`, `cogdl/sub-skills/models-layers-and-operators/`, `cogdl/sub-skills/pipelines-and-applications/`, `cogdl/sub-skills/training-wrappers-and-customization/`, `cogdl/references/package-overview.md`.

### `deep-gcns-torch`

Role: Use the DeepGCNs PyTorch operating guide for graph convolution layers, dynamic and dilated KNN blocks, point-cloud classification or segmentation, PPI, OGB/DeeperGCN, and reversible memory-efficient GNN workflows.
Read when: The request names `deep-gcns-torch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: graph layers, ogb workflows, point cloud workflows, and ppi workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-gcns-torch/SKILL.md`, `deep-gcns-torch/sub-skills/graph-layers/`, `deep-gcns-torch/sub-skills/ogb-workflows/`, `deep-gcns-torch/sub-skills/point-cloud-workflows/`, `deep-gcns-torch/sub-skills/ppi-workflows/`, `deep-gcns-torch/references/api-overview.md`.

### `dive-into-graphs`

Role: Use DIG (Dive into Graphs) to load graph-learning datasets, run graph generation, self-supervised learning, GNN explainability, 3D graph learning, GOOD OOD datasets, graph augmentation, fair graph learning, and large-scale graph workflows.
Read when: The request names `dive-into-graphs` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: fair graph learning, good ood datasets, graph augmentation, graph explainability, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dive-into-graphs/SKILL.md`, `dive-into-graphs/sub-skills/fair-graph-learning/`, `dive-into-graphs/sub-skills/good-ood-datasets/`, `dive-into-graphs/sub-skills/graph-augmentation/`, `dive-into-graphs/sub-skills/graph-explainability/`, `dive-into-graphs/sub-skills/large-scale-graphs/`, `dive-into-graphs/references/capability-map.md`.

### `graph-nets`

Role: Use DeepMind Graph Nets for GraphsTuple data, TensorFlow graph utilities, and Sonnet graph-network modules.
Read when: The request names `graph-nets` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: graph data, graph models, and tensorflow ops.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `graph-nets/SKILL.md`, `graph-nets/sub-skills/graph-data/`, `graph-nets/sub-skills/graph-models/`, `graph-nets/sub-skills/tensorflow-ops/`, `graph-nets/references/compatibility.md`, `graph-nets/references/demo-recipes.md`.

### `graphormer`

Role: Routes Graphormer users to fairseq training, dataset customization, pretrained evaluation, model extension, and DiG workflows.
Read when: The request names `graphormer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and customization, distributional graphormer, fairseq training, model extension, and pretrained and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `graphormer/SKILL.md`, `graphormer/sub-skills/datasets-and-customization/`, `graphormer/sub-skills/distributional-graphormer/`, `graphormer/sub-skills/fairseq-training/`, `graphormer/sub-skills/model-extension/`, `graphormer/sub-skills/pretrained-and-evaluation/`, `graphormer/references/installation-and-environment.md`.

### `ogb`

Role: Routes OGB graph dataset, evaluator, conversion, and export workflows.
Read when: The request names `ogb` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset contribution, graph property prediction, link property prediction, lsc benchmarks, and node property prediction.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ogb/SKILL.md`, `ogb/sub-skills/dataset-contribution/`, `ogb/sub-skills/graph-property-prediction/`, `ogb/sub-skills/link-property-prediction/`, `ogb/sub-skills/lsc-benchmarks/`, `ogb/sub-skills/node-property-prediction/`, `ogb/references/api-overview.md`.

### `pytorch-geometric-temporal`

Role: Routes PyTorch Geometric Temporal tasks for temporal graph signals, built-in datasets, recurrent and attention graph neural layers, index-batching, and optional Dask-DDP workflows.
Read when: The request names `pytorch-geometric-temporal` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: attention and hetero layers, dataset loaders, index batching, recurrent layers, and temporal signals.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-geometric-temporal/SKILL.md`, `pytorch-geometric-temporal/sub-skills/attention-and-hetero-layers/`, `pytorch-geometric-temporal/sub-skills/dataset-loaders/`, `pytorch-geometric-temporal/sub-skills/index-batching/`, `pytorch-geometric-temporal/sub-skills/recurrent-layers/`, `pytorch-geometric-temporal/sub-skills/temporal-signals/`, `pytorch-geometric-temporal/references/install-and-compatibility.md`.

### `spektral`

Role: Helps with Spektral graph neural network workflows, from graph data loading and transforms to layers and models.
Read when: The request names `spektral` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: gnn models and graph data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `spektral/SKILL.md`, `spektral/sub-skills/gnn-models/`, `spektral/sub-skills/graph-data/`, `spektral/references/api-overview.md`, `spektral/references/repo-provenance.md`, `spektral/references/troubleshooting.md`.

### `stellargraph`

Role: Routes StellarGraph graph machine learning tasks across graph construction, samplers, TensorFlow Keras models, link prediction, embeddings, graph classification, time series, calibration, ensembles, interpretability, datasets, and Neo4j connector workflows.
Read when: The request names `stellargraph` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embedding workflows, graph data loading, graph time series workflows, link prediction kg, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stellargraph/SKILL.md`, `stellargraph/sub-skills/embedding-workflows/`, `stellargraph/sub-skills/graph-data-loading/`, `stellargraph/sub-skills/graph-time-series-workflows/`, `stellargraph/sub-skills/link-prediction-kg/`, `stellargraph/sub-skills/model-ops-interpretability/`, `stellargraph/references/package-overview.md`.

<!-- DISCO_SCENARIO:graph-learning-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
