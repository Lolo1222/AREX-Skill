# Time Series Analysis — General

## When To Read

Time Series Analysis requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:time-series-analysis-general:START -->
### `flow-forecast`

Role: Repository operating skill for using Flow Forecast's flood_forecast package for time-series forecasting, data preparation, training, inference, evaluation, and hydrology-oriented advanced models.
Read when: The request names `flow-forecast` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, multimodal physics, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `flow-forecast/SKILL.md`, `flow-forecast/sub-skills/data-preparation/`, `flow-forecast/sub-skills/inference/`, `flow-forecast/sub-skills/multimodal-physics/`, `flow-forecast/sub-skills/training/`, `flow-forecast/references/model-overview.md`.

### `mne-python`

Role: Route MNE-Python neurophysiology I/O, preprocessing, visualization, source modeling, analysis, CLI, datasets, and repository-development workflows.
Read when: The request names `mne-python` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli datasets config, io raw data, preprocessing epochs evoked, repo development, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mne-python/SKILL.md`, `mne-python/sub-skills/cli-datasets-config/`, `mne-python/sub-skills/io-raw-data/`, `mne-python/sub-skills/preprocessing-epochs-evoked/`, `mne-python/sub-skills/repo-development/`, `mne-python/sub-skills/source-modeling-inverse/`, `mne-python/references/installation-and-environment.md`.

### `nupic-legacy`

Role: Use NuPIC legacy HTM algorithms, OPF prediction, Network API pipelines, swarming search definitions, and data/config validation in Python 2.7-era runtimes.
Read when: The request names `nupic-legacy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and configuration, htm algorithms, network api, opf prediction, and swarming.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nupic-legacy/SKILL.md`, `nupic-legacy/sub-skills/data-and-configuration/`, `nupic-legacy/sub-skills/htm-algorithms/`, `nupic-legacy/sub-skills/network-api/`, `nupic-legacy/sub-skills/opf-prediction/`, `nupic-legacy/sub-skills/swarming/`, `nupic-legacy/references/installation-and-runtime.md`.

### `pyod`

Role: Operate PyOD anomaly-detection workflows across classic detectors, ADEngine automation, specialized modalities, model operations, and source maintenance.
Read when: The request names `pyod` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automated lifecycle, classic detectors, model operations, repo maintenance, and specialized modalities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyod/SKILL.md`, `pyod/sub-skills/automated-lifecycle/`, `pyod/sub-skills/classic-detectors/`, `pyod/sub-skills/model-operations/`, `pyod/sub-skills/repo-maintenance/`, `pyod/sub-skills/specialized-modalities/`, `pyod/references/installation-and-extras.md`.

### `pypots`

Role: Routes PyPOTS workflows for imputation, forecasting, classification, anomaly detection, clustering, representation learning, and the command-line and data-management surfaces around them.
Read when: The request names `pypots` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: anomaly detection, classification, cli, clustering, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pypots/SKILL.md`, `pypots/sub-skills/anomaly-detection/`, `pypots/sub-skills/classification/`, `pypots/sub-skills/cli/`, `pypots/sub-skills/clustering/`, `pypots/sub-skills/forecasting/`, `pypots/references/api-reference.md`.

### `pyts`

Role: Routes pyts time-series loading, preprocessing, symbolic encoding, feature extraction, metrics, classification, and multivariate workflows.
Read when: The request names `pyts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and loaders, feature extraction and images, metrics and classifiers, multivariate workflows, and preprocessing and symbols.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyts/SKILL.md`, `pyts/sub-skills/datasets-and-loaders/`, `pyts/sub-skills/feature-extraction-and-images/`, `pyts/sub-skills/metrics-and-classifiers/`, `pyts/sub-skills/multivariate-workflows/`, `pyts/sub-skills/preprocessing-and-symbols/`, `pyts/references/package-and-build.md`.

### `pywavelets`

Role: Routes PyWavelets users to discrete transforms, wavelet-family and CWT workflows, and wavelet-packet tree operations.
Read when: The request names `pywavelets` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: discrete transforms, wavelet packets, and wavelets and cwt.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pywavelets/SKILL.md`, `pywavelets/sub-skills/discrete-transforms/`, `pywavelets/sub-skills/wavelet-packets/`, `pywavelets/sub-skills/wavelets-and-cwt/`, `pywavelets/references/data-and-demo-signals.md`, `pywavelets/references/package-overview.md`.

### `sktime`

Role: Use sktime for time-series forecasting, classification, regression, clustering, transformations, detection, data interfaces, evaluation, benchmarking, and extension development.
Read when: The request names `sktime` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data interfaces, detection distances, evaluation benchmarking, extension development, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sktime/SKILL.md`, `sktime/sub-skills/data-interfaces/`, `sktime/sub-skills/detection-distances/`, `sktime/sub-skills/evaluation-benchmarking/`, `sktime/sub-skills/extension-development/`, `sktime/sub-skills/forecasting/`, `sktime/references/package-overview.md`.

### `stumpy`

Role: Use the STUMPY time-series matrix-profile package for exact, approximate, streaming, multidimensional, motif, segmentation, distributed, and optional GPU workflows.
Read when: The request names `stumpy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: approximate streaming pan, distributed gpu acceleration, matrix profile basics, motifs anomalies segmentation, and multidimensional profiles.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stumpy/SKILL.md`, `stumpy/sub-skills/approximate-streaming-pan/`, `stumpy/sub-skills/distributed-gpu-acceleration/`, `stumpy/sub-skills/matrix-profile-basics/`, `stumpy/sub-skills/motifs-anomalies-segmentation/`, `stumpy/sub-skills/multidimensional-profiles/`, `stumpy/references/package-overview.md`.

### `time-series-library`

Role: Use Time-Series-Library (TSLib) to configure, run, debug, and adapt deep time-series forecasting, imputation, anomaly detection, classification, zero-shot, and model-customization workflows.
Read when: The request names `time-series-library` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and cli, forecasting, foundation models and customization, and imputation anomaly classification.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `time-series-library/SKILL.md`, `time-series-library/sub-skills/data-and-cli/`, `time-series-library/sub-skills/forecasting/`, `time-series-library/sub-skills/foundation-models-and-customization/`, `time-series-library/sub-skills/imputation-anomaly-classification/`, `time-series-library/references/cli-arguments.md`.

### `timemixer`

Role: Use TimeMixer to inspect the model API, build forecasting or non-forecast commands, validate dataset layouts, and debug shape or task-specific workflow issues.
Read when: The request names `timemixer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, forecasting experiments, model architecture, and universal tasks.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `timemixer/SKILL.md`, `timemixer/sub-skills/data-preparation/`, `timemixer/sub-skills/forecasting-experiments/`, `timemixer/sub-skills/model-architecture/`, `timemixer/sub-skills/universal-tasks/`, `timemixer/references/cli-reference.md`.

### `tslearn`

Role: Routes tslearn users to data preparation, metrics/backends, clustering, supervised models, forecasting, and analysis/persistence workflows.
Read when: The request names `tslearn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and persistence, clustering, data preparation, forecasting, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tslearn/SKILL.md`, `tslearn/sub-skills/analysis-and-persistence/`, `tslearn/sub-skills/clustering/`, `tslearn/sub-skills/data-preparation/`, `tslearn/sub-skills/forecasting/`, `tslearn/sub-skills/metrics-backends/`, `tslearn/references/overview.md`.

### `unit8co-darts`

Role: Use Darts for Python time-series construction, preprocessing, forecasting, PyTorch/foundation models, anomaly detection, metrics, and explainability.
Read when: The request names `unit8co-darts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: anomaly detection, data processing and covariates, evaluation and explainability, forecasting workflows, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `unit8co-darts/SKILL.md`, `unit8co-darts/sub-skills/anomaly-detection/`, `unit8co-darts/sub-skills/data-processing-and-covariates/`, `unit8co-darts/sub-skills/evaluation-and-explainability/`, `unit8co-darts/sub-skills/forecasting-workflows/`, `unit8co-darts/sub-skills/time-series-and-data/`, `unit8co-darts/references/installation-and-optional-dependencies.md`.

<!-- DISCO_SCENARIO:time-series-analysis-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
