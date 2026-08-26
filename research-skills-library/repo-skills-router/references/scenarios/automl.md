# AutoML

## When To Read

Requests in the AutoML family of the MLOps area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on automl.

## Repo Skill Options

<!-- DISCO_SCENARIO:automl:START -->
### `auto-pytorch`

Role: Route Auto-PyTorch tabular and forecasting workflows.
Read when: The request names `auto-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: forecasting and tabular automl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `auto-pytorch/SKILL.md`, `auto-pytorch/sub-skills/forecasting/`, `auto-pytorch/sub-skills/tabular-automl/`, `auto-pytorch/references/package-overview.md`, `auto-pytorch/references/repo-provenance.md`, `auto-pytorch/references/troubleshooting.md`.

### `auto-sklearn`

Role: Route auto-sklearn AutoML estimator, data validation, search, custom component, and metadata-maintenance workflows.
Read when: The request names `auto-sklearn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom components, data metrics validation, estimators, metadata maintenance, and search and parallelism.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `auto-sklearn/SKILL.md`, `auto-sklearn/sub-skills/custom-components/`, `auto-sklearn/sub-skills/data-metrics-validation/`, `auto-sklearn/sub-skills/estimators/`, `auto-sklearn/sub-skills/metadata-maintenance/`, `auto-sklearn/sub-skills/search-and-parallelism/`, `auto-sklearn/references/repo-provenance.md`.

### `autokeras`

Role: Use AutoKeras for Keras-based AutoML task APIs, custom AutoModel graphs, tuner search, and model export workflows.
Read when: The request names `autokeras` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automodel customization, search and export, and task apis.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autokeras/SKILL.md`, `autokeras/sub-skills/automodel-customization/`, `autokeras/sub-skills/search-and-export/`, `autokeras/sub-skills/task-apis/`, `autokeras/references/repo-provenance.md`, `autokeras/references/setup-and-troubleshooting.md`.

### `automl-gs`

Role: Routes automl_gs tabular AutoML searches and the generated runtime artifacts that those searches produce.
Read when: The request names `automl-gs` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generated artifacts and grid search.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `automl-gs/SKILL.md`, `automl-gs/sub-skills/generated-artifacts/`, `automl-gs/sub-skills/grid-search/`, `automl-gs/references/repo-provenance.md`, `automl-gs/references/troubleshooting.md`, `automl-gs/references/workflow-overview.md`.

### `bayesian-optimization`

Role: Route BayesianOptimization package tasks for black-box Bayesian optimization, HPO, acquisition functions, constraints, typed domains, domain reduction, and checkout maintenance.
Read when: The request names `bayesian-optimization` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: acquisition control, advanced domain features, optimizer workflows, and repo maintenance.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bayesian-optimization/SKILL.md`, `bayesian-optimization/sub-skills/acquisition-control/`, `bayesian-optimization/sub-skills/advanced-domain-features/`, `bayesian-optimization/sub-skills/optimizer-workflows/`, `bayesian-optimization/sub-skills/repo-maintenance/`, `bayesian-optimization/references/repo-provenance.md`.

### `cream`

Role: Routes DisCo Researcher to Cream-family vision NAS, compression, distillation, and relative-position-encoding workflows across the AutoFormer, AutoFormerV2, Cream, CDARTS, EfficientViT, MiniViT, TinyCLIP, TinyViT, and iRPE project families.
Read when: The request names `cream` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: efficientvit, irpe, minivit, nas search, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cream/SKILL.md`, `cream/sub-skills/efficientvit/`, `cream/sub-skills/irpe/`, `cream/sub-skills/minivit/`, `cream/sub-skills/nas-search/`, `cream/sub-skills/tinyclip/`, `cream/references/compatibility.md`.

### `igel`

Role: Use Igel for classic tabular ML, FastAPI serving, and AutoKeras-backed Auto-ML workflows.
Read when: The request names `igel` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auto ml, deployment, and tabular workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `igel/SKILL.md`, `igel/sub-skills/auto-ml/`, `igel/sub-skills/deployment/`, `igel/sub-skills/tabular-workflows/`, `igel/references/package-overview.md`, `igel/references/repo-provenance.md`.

### `keras-tuner`

Role: Routes KerasTuner workflows for defining hyperparameter spaces, running search algorithms, tuning image and scikit-learn models, and coordinating distributed chief/worker search state.
Read when: The request names `keras-tuner` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: distributed tuning, image hypermodels, sklearn tuning, and tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `keras-tuner/SKILL.md`, `keras-tuner/sub-skills/distributed-tuning/`, `keras-tuner/sub-skills/image-hypermodels/`, `keras-tuner/sub-skills/sklearn-tuning/`, `keras-tuner/sub-skills/tuning/`, `keras-tuner/references/api-reference.md`.

### `lazypredict`

Role: Use Lazy Predict for low-code model benchmarking, supervised classification and regression sweeps, time-series forecasting comparisons, CLI CSV runs, optional tuning, explainability, MLflow, Spark, and dependency troubleshooting.
Read when: The request names `lazypredict` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced workflows, cli and integrations, supervised benchmarking, and time series forecasting.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lazypredict/SKILL.md`, `lazypredict/sub-skills/advanced-workflows/`, `lazypredict/sub-skills/cli-and-integrations/`, `lazypredict/sub-skills/supervised-benchmarking/`, `lazypredict/sub-skills/time-series-forecasting/`, `lazypredict/references/install-and-troubleshooting.md`.

### `mljar-supervised`

Role: Use MLJAR AutoML for tabular classification, regression, fairness-aware training, reports, persistence, and generated Mercury apps.
Read when: The request names `mljar-supervised` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: app deployment, artifacts reports, data preprocessing, fairness workflows, and training core.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mljar-supervised/SKILL.md`, `mljar-supervised/sub-skills/app-deployment/`, `mljar-supervised/sub-skills/artifacts-reports/`, `mljar-supervised/sub-skills/data-preprocessing/`, `mljar-supervised/sub-skills/fairness-workflows/`, `mljar-supervised/sub-skills/training-core/`, `mljar-supervised/references/package-overview.md`.

### `neuralforecast`

Role: Routes NeuralForecast time-series forecasting, data, model-selection, loss, tuning, and deployment workflows.
Read when: The request names `neuralforecast` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core forecasting, data and exogenous, deployment and extension, model selection, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `neuralforecast/SKILL.md`, `neuralforecast/sub-skills/core-forecasting/`, `neuralforecast/sub-skills/data-and-exogenous/`, `neuralforecast/sub-skills/deployment-and-extension/`, `neuralforecast/sub-skills/model-selection/`, `neuralforecast/sub-skills/probabilistic-losses/`, `neuralforecast/references/api-reference.md`.

### `once-for-all`

Role: Routes Once-for-All/OFA pretrained model loading, subnet evaluation, and predictor-driven architecture-search workflows.
Read when: The request names `once-for-all` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and search.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `once-for-all/SKILL.md`, `once-for-all/sub-skills/inference/`, `once-for-all/sub-skills/search/`, `once-for-all/references/dependencies.md`, `once-for-all/references/repo-provenance.md`, `once-for-all/references/troubleshooting.md`.

### `orange3`

Role: Route Orange3 data mining, modeling, visualization, and widget-development workflows across the Orange data/API and Canvas widget surfaces.
Read when: The request names `orange3` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, exploration visualization, supervised modeling, and widget development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `orange3/SKILL.md`, `orange3/sub-skills/data-preparation/`, `orange3/sub-skills/exploration-visualization/`, `orange3/sub-skills/supervised-modeling/`, `orange3/sub-skills/widget-development/`, `orange3/references/package-overview.md`.

### `plexe`

Role: Route Plexe model-building, retraining, and dashboard workflows.
Read when: The request names `plexe` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dashboard and model building.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `plexe/SKILL.md`, `plexe/sub-skills/dashboard/`, `plexe/sub-skills/model-building/`, `plexe/references/repo-provenance.md`, `plexe/references/troubleshooting.md`, `plexe/scripts/check_env.py`.

### `pocket-flow`

Role: Use PocketFlow for TensorFlow 1.x model compression, learner selection, custom model/data integration, execution setup, and deployment conversion workflows.
Read when: The request names `pocket-flow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: compression learners, custom models data, deployment conversion, and execution config.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pocket-flow/SKILL.md`, `pocket-flow/sub-skills/compression-learners/`, `pocket-flow/sub-skills/custom-models-data/`, `pocket-flow/sub-skills/deployment-conversion/`, `pocket-flow/sub-skills/execution-config/`, `pocket-flow/references/overview.md`.

### `pycaret`

Role: Routes PyCaret monorepo tasks across engine workflows, backend API work, web UI edits, deployment operations, and maintainer workflows.
Read when: The request names `pycaret` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: control plane api, engine workflows, platform operations, repo development, and web ui.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pycaret/SKILL.md`, `pycaret/sub-skills/control-plane-api/`, `pycaret/sub-skills/engine-workflows/`, `pycaret/sub-skills/platform-operations/`, `pycaret/sub-skills/repo-development/`, `pycaret/sub-skills/web-ui/`, `pycaret/references/package-overview.md`.

### `pyod`

Role: Operate PyOD anomaly-detection workflows across classic detectors, ADEngine automation, specialized modalities, model operations, and source maintenance.
Read when: The request names `pyod` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automated lifecycle, classic detectors, model operations, repo maintenance, and specialized modalities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyod/SKILL.md`, `pyod/sub-skills/automated-lifecycle/`, `pyod/sub-skills/classic-detectors/`, `pyod/sub-skills/model-operations/`, `pyod/sub-skills/repo-maintenance/`, `pyod/sub-skills/specialized-modalities/`, `pyod/references/installation-and-extras.md`.

### `quark0-darts`

Role: Use the original DARTS research code for differentiable architecture search, CNN/RNN genotypes, CIFAR/ImageNet/PTB/WT2 workflows, and legacy PyTorch troubleshooting.
Read when: The request names `quark0-darts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cnn architectures, genotypes and visualization, and rnn language modeling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `quark0-darts/SKILL.md`, `quark0-darts/sub-skills/cnn-architectures/`, `quark0-darts/sub-skills/genotypes-and-visualization/`, `quark0-darts/sub-skills/rnn-language-modeling/`, `quark0-darts/references/data-and-checkpoints.md`, `quark0-darts/references/legacy-runtime.md`.

### `rl-baselines3-zoo`

Role: Operate RL Baselines3 Zoo package and CLI workflows for Stable-Baselines3 reinforcement-learning experiments.
Read when: The request names `rl-baselines3-zoo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: config hyperparams, custom components, evaluation and artifacts, integrations hub tracking, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rl-baselines3-zoo/SKILL.md`, `rl-baselines3-zoo/sub-skills/config-hyperparams/`, `rl-baselines3-zoo/sub-skills/custom-components/`, `rl-baselines3-zoo/sub-skills/evaluation-and-artifacts/`, `rl-baselines3-zoo/sub-skills/integrations-hub-tracking/`, `rl-baselines3-zoo/sub-skills/plotting-benchmarking/`, `rl-baselines3-zoo/references/cli-command-map.md`.

<!-- DISCO_SCENARIO:automl:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
