# Tabular Modeling

## When To Read

Requests in the Tabular Modeling family of the Data Science area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on tabular modeling.

## Repo Skill Options

<!-- DISCO_SCENARIO:tabular-modeling:START -->
### `auto-pytorch`

Role: Route Auto-PyTorch tabular and forecasting workflows.
Read when: The request names `auto-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: forecasting and tabular automl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `auto-pytorch/SKILL.md`, `auto-pytorch/sub-skills/forecasting/`, `auto-pytorch/sub-skills/tabular-automl/`, `auto-pytorch/references/package-overview.md`, `auto-pytorch/references/repo-provenance.md`, `auto-pytorch/references/troubleshooting.md`.

### `automl-gs`

Role: Routes automl_gs tabular AutoML searches and the generated runtime artifacts that those searches produce.
Read when: The request names `automl-gs` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generated artifacts and grid search.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `automl-gs/SKILL.md`, `automl-gs/sub-skills/generated-artifacts/`, `automl-gs/sub-skills/grid-search/`, `automl-gs/references/repo-provenance.md`, `automl-gs/references/troubleshooting.md`, `automl-gs/references/workflow-overview.md`.

### `cuml`

Role: cuML operating skill for GPU-accelerated classical ML, cuml.accel, Dask multi-GPU workflows, data utilities, and native source-build guidance.
Read when: The request names `cuml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data pipeline utilities, distributed dask, native build and cpp, python estimators, and sklearn accel.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cuml/SKILL.md`, `cuml/sub-skills/data-pipeline-utilities/`, `cuml/sub-skills/distributed-dask/`, `cuml/sub-skills/native-build-and-cpp/`, `cuml/sub-skills/python-estimators/`, `cuml/sub-skills/sklearn-accel/`, `cuml/references/package-overview.md`.

### `data-science-python`

Role: Use the DataSciencePython tutorial/example collection through modern self-contained helpers for Python data-science resources, statsmodels logistic regression, scikit-learn Kaggle-style tabular classifiers, and Twitter JSONL extraction.
Read when: The request names `data-science-python` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: kaggle linear models, statsmodels logit workflow, tutorial resource map, and twitter json workflow.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `data-science-python/SKILL.md`, `data-science-python/sub-skills/kaggle-linear-models/`, `data-science-python/sub-skills/statsmodels-logit-workflow/`, `data-science-python/sub-skills/tutorial-resource-map/`, `data-science-python/sub-skills/twitter-json-workflow/`, `data-science-python/references/environment.md`.

### `igel`

Role: Use Igel for classic tabular ML, FastAPI serving, and AutoKeras-backed Auto-ML workflows.
Read when: The request names `igel` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auto ml, deployment, and tabular workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `igel/SKILL.md`, `igel/sub-skills/auto-ml/`, `igel/sub-skills/deployment/`, `igel/sub-skills/tabular-workflows/`, `igel/references/package-overview.md`, `igel/references/repo-provenance.md`.

### `imbalanced-learn`

Role: Router for imbalanced-learn samplers, workflows, metrics, datasets, and balanced batch generators.
Read when: The request names `imbalanced-learn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation and data, model workflows, optional batch generators, and sampling algorithms.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `imbalanced-learn/SKILL.md`, `imbalanced-learn/sub-skills/evaluation-and-data/`, `imbalanced-learn/sub-skills/model-workflows/`, `imbalanced-learn/sub-skills/optional-batch-generators/`, `imbalanced-learn/sub-skills/sampling-algorithms/`, `imbalanced-learn/references/api-overview.md`.

### `lazypredict`

Role: Use Lazy Predict for low-code model benchmarking, supervised classification and regression sweeps, time-series forecasting comparisons, CLI CSV runs, optional tuning, explainability, MLflow, Spark, and dependency troubleshooting.
Read when: The request names `lazypredict` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced workflows, cli and integrations, supervised benchmarking, and time series forecasting.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lazypredict/SKILL.md`, `lazypredict/sub-skills/advanced-workflows/`, `lazypredict/sub-skills/cli-and-integrations/`, `lazypredict/sub-skills/supervised-benchmarking/`, `lazypredict/sub-skills/time-series-forecasting/`, `lazypredict/references/install-and-troubleshooting.md`.

### `libra`

Role: Use the Libra ergonomic machine-learning client for query-driven tabular, NLP, vision, recommendation, dashboard, and analysis workflows.
Read when: The request names `libra` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: nlp and generation, tabular modeling, and vision and generative.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `libra/SKILL.md`, `libra/sub-skills/nlp-and-generation/`, `libra/sub-skills/tabular-modeling/`, `libra/sub-skills/vision-and-generative/`, `libra/references/api-surface.md`, `libra/references/environment-and-compatibility.md`.

### `limi-x`

Role: Use LimiX for structured/tabular foundation-model inference, configuration, retrieval tuning, and benchmark-style workflows.
Read when: The request names `limi-x` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark cli, configuration preprocessing, predictor inference, and retrieval optimization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `limi-x/SKILL.md`, `limi-x/sub-skills/benchmark-cli/`, `limi-x/sub-skills/configuration-preprocessing/`, `limi-x/sub-skills/predictor-inference/`, `limi-x/sub-skills/retrieval-optimization/`, `limi-x/references/installation.md`.

### `ml-algorithms`

Role: Use the `ml-algorithms` skill for MLAlgorithms (`mla`) educational machine-learning implementations: classical estimators, clustering/reduction, metrics, NeuralNet building blocks, and DQN examples.
Read when: The request names `ml-algorithms` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classical estimators, neural network building blocks, and unsupervised and reduction.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ml-algorithms/SKILL.md`, `ml-algorithms/sub-skills/classical-estimators/`, `ml-algorithms/sub-skills/neural-network-building-blocks/`, `ml-algorithms/sub-skills/unsupervised-and-reduction/`, `ml-algorithms/references/api-reference.md`, `ml-algorithms/references/repo-provenance.md`.

### `mljar-supervised`

Role: Use MLJAR AutoML for tabular classification, regression, fairness-aware training, reports, persistence, and generated Mercury apps.
Read when: The request names `mljar-supervised` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: app deployment, artifacts reports, data preprocessing, fairness workflows, and training core.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mljar-supervised/SKILL.md`, `mljar-supervised/sub-skills/app-deployment/`, `mljar-supervised/sub-skills/artifacts-reports/`, `mljar-supervised/sub-skills/data-preprocessing/`, `mljar-supervised/sub-skills/fairness-workflows/`, `mljar-supervised/sub-skills/training-core/`, `mljar-supervised/references/package-overview.md`.

### `mlxtend`

Role: Use mlxtend machine-learning extension utilities for estimator ensembles, evaluation, feature workflows, frequent patterns, plotting, datasets, and small helper APIs.
Read when: The request names `mlxtend` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: estimators and ensembles, evaluation and validation, feature workflows, frequent patterns, and plotting and utilities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mlxtend/SKILL.md`, `mlxtend/sub-skills/estimators-and-ensembles/`, `mlxtend/sub-skills/evaluation-and-validation/`, `mlxtend/sub-skills/feature-workflows/`, `mlxtend/sub-skills/frequent-patterns/`, `mlxtend/sub-skills/plotting-and-utilities/`, `mlxtend/references/package-overview.md`.

### `numpy-ml`

Role: Routes numpy-ml users to the right classical ML, preprocessing, neural-component, probabilistic, and RL workflows.
Read when: The request names `numpy-ml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: bandits and reinforcement learning, neural network components, preprocessing and utilities, probabilistic and sequence models, and supervised and tabular models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `numpy-ml/SKILL.md`, `numpy-ml/sub-skills/bandits-and-reinforcement-learning/`, `numpy-ml/sub-skills/neural-network-components/`, `numpy-ml/sub-skills/preprocessing-and-utilities/`, `numpy-ml/sub-skills/probabilistic-and-sequence-models/`, `numpy-ml/sub-skills/supervised-and-tabular-models/`, `numpy-ml/references/api-overview.md`.

### `plexe`

Role: Route Plexe model-building, retraining, and dashboard workflows.
Read when: The request names `plexe` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dashboard and model building.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `plexe/SKILL.md`, `plexe/sub-skills/dashboard/`, `plexe/sub-skills/model-building/`, `plexe/references/repo-provenance.md`, `plexe/references/troubleshooting.md`, `plexe/scripts/check_env.py`.

### `serenata-de-amor`

Role: Use Operação Serenata de Amor's Rosie suspicious-expense pipeline and Jarbas Django data API, setup, and data-loading workflows.
Read when: The request names `serenata-de-amor` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and data ops, jarbas data api, and rosie suspicion pipeline.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `serenata-de-amor/SKILL.md`, `serenata-de-amor/sub-skills/deployment-and-data-ops/`, `serenata-de-amor/sub-skills/jarbas-data-api/`, `serenata-de-amor/sub-skills/rosie-suspicion-pipeline/`, `serenata-de-amor/references/repo-provenance.md`, `serenata-de-amor/references/troubleshooting.md`.

### `tabpfn`

Role: Routes TabPFN tabular foundation-model workflows across prediction, preprocessing, batched inference, tuning, and model-management tasks.
Read when: The request names `tabpfn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: batched performance, model management, preprocessing config, tabular prediction, and tuning and advanced.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tabpfn/SKILL.md`, `tabpfn/sub-skills/batched-performance/`, `tabpfn/sub-skills/model-management/`, `tabpfn/sub-skills/preprocessing-config/`, `tabpfn/sub-skills/tabular-prediction/`, `tabpfn/sub-skills/tuning-and-advanced/`, `tabpfn/references/configuration.md`.

<!-- DISCO_SCENARIO:tabular-modeling:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
