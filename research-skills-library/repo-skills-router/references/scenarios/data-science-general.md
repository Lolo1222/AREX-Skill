# Data Science — General

## When To Read

Data Science requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:data-science-general:START -->
### `ai-data-science-team`

Role: Operate the ai-data-science-team package for AI-assisted data loading, EDA, pandas transformations, SQL analysis, H2O/MLflow modeling, multi-agent teams, and Streamlit app workflows.
Read when: The request names `ai-data-science-team` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data access and eda, dataframe code agents, modeling and mlflow, multiagent and app workflows, and sql analysis.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ai-data-science-team/SKILL.md`, `ai-data-science-team/sub-skills/data-access-and-eda/`, `ai-data-science-team/sub-skills/dataframe-code-agents/`, `ai-data-science-team/sub-skills/modeling-and-mlflow/`, `ai-data-science-team/sub-skills/multiagent-and-app-workflows/`, `ai-data-science-team/sub-skills/sql-analysis/`, `ai-data-science-team/references/package-overview.md`.

### `alpha-gpt`

Role: Route AlphaGPT data ingestion, factor mining, live strategy, and dashboard workflows.
Read when: The request names `alpha-gpt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dashboard ops, data pipeline, factor mining, and live strategy.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alpha-gpt/SKILL.md`, `alpha-gpt/sub-skills/dashboard-ops/`, `alpha-gpt/sub-skills/data-pipeline/`, `alpha-gpt/sub-skills/factor-mining/`, `alpha-gpt/sub-skills/live-strategy/`, `alpha-gpt/references/experiments-and-exclusions.md`.

### `autoviz`

Role: Routes AutoViz users to automated EDA, data-quality, and text/wordcloud workflows.
Read when: The request names `autoviz` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data quality fixes, eda visualization, and text wordclouds.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autoviz/SKILL.md`, `autoviz/sub-skills/data-quality-fixes/`, `autoviz/sub-skills/eda-visualization/`, `autoviz/sub-skills/text-wordclouds/`, `autoviz/references/api-reference.md`, `autoviz/references/chart-formats.md`.

### `aws-sdk-pandas`

Role: Routes AWS SDK for pandas (awswrangler) workflows across S3 lakehouse data, Athena/Glue catalogs, SQL connectors, runtime configuration, and AWS service integrations.
Read when: The request names `aws-sdk-pandas` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: catalog and query, runtime and config, s3 lakehouse, service integrations, and sql connectors.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `aws-sdk-pandas/SKILL.md`, `aws-sdk-pandas/sub-skills/catalog-and-query/`, `aws-sdk-pandas/sub-skills/runtime-and-config/`, `aws-sdk-pandas/sub-skills/s3-lakehouse/`, `aws-sdk-pandas/sub-skills/service-integrations/`, `aws-sdk-pandas/sub-skills/sql-connectors/`, `aws-sdk-pandas/references/repo-provenance.md`.

### `causalml`

Role: Use CausalML for causal inference, uplift modeling, matching, validation, interpretation, and treatment optimization workflows.
Read when: The request names `causalml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and decision, causal estimation, data preparation, deep models, and tree models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `causalml/SKILL.md`, `causalml/sub-skills/analysis-and-decision/`, `causalml/sub-skills/causal-estimation/`, `causalml/sub-skills/data-preparation/`, `causalml/sub-skills/deep-models/`, `causalml/sub-skills/tree-models/`, `causalml/references/repo-provenance.md`.

### `clue-dataset-search`

Role: Routes tasks for discovering NLP datasets in the CLUEDatasetSearch catalogue, including Chinese NLP classification, QA, matching, NER, generation, translation, corpus, and reading-comprehension resources.
Read when: The request names `clue-dataset-search` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification sentiment, generation corpora, matching nli, qa reading, and sequence labeling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `clue-dataset-search/SKILL.md`, `clue-dataset-search/sub-skills/classification-sentiment/`, `clue-dataset-search/sub-skills/generation-corpora/`, `clue-dataset-search/sub-skills/matching-nli/`, `clue-dataset-search/sub-skills/qa-reading/`, `clue-dataset-search/sub-skills/sequence-labeling/`, `clue-dataset-search/references/access-and-license-caveats.md`.

### `cuml`

Role: cuML operating skill for GPU-accelerated classical ML, cuml.accel, Dask multi-GPU workflows, data utilities, and native source-build guidance.
Read when: The request names `cuml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data pipeline utilities, distributed dask, native build and cpp, python estimators, and sklearn accel.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cuml/SKILL.md`, `cuml/sub-skills/data-pipeline-utilities/`, `cuml/sub-skills/distributed-dask/`, `cuml/sub-skills/native-build-and-cpp/`, `cuml/sub-skills/python-estimators/`, `cuml/sub-skills/sklearn-accel/`, `cuml/references/package-overview.md`.

### `data-juicer`

Role: Data-Juicer repo router for local recipes, Ray recovery, and service/MCP workflows.
Read when: The request names `data-juicer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ray and recovery, recipes and ops, and service mcp.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `data-juicer/SKILL.md`, `data-juicer/sub-skills/ray-and-recovery/`, `data-juicer/sub-skills/recipes-and-ops/`, `data-juicer/sub-skills/service-mcp/`, `data-juicer/references/api-reference.md`, `data-juicer/references/cli-reference.md`.

### `data-science-python`

Role: Use the DataSciencePython tutorial/example collection through modern self-contained helpers for Python data-science resources, statsmodels logistic regression, scikit-learn Kaggle-style tabular classifiers, and Twitter JSONL extraction.
Read when: The request names `data-science-python` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: kaggle linear models, statsmodels logit workflow, tutorial resource map, and twitter json workflow.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `data-science-python/SKILL.md`, `data-science-python/sub-skills/kaggle-linear-models/`, `data-science-python/sub-skills/statsmodels-logit-workflow/`, `data-science-python/sub-skills/tutorial-resource-map/`, `data-science-python/sub-skills/twitter-json-workflow/`, `data-science-python/references/environment.md`.

### `deep-ctr-torch`

Role: Use DeepCTR-Torch for PyTorch CTR/recommender feature columns, single-task models, DIN/DIEN sequence models, and multi-task learning workflows.
Read when: The request names `deep-ctr-torch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: feature column inputs, multitask modeling, sequence and interest models, and single task modeling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-ctr-torch/SKILL.md`, `deep-ctr-torch/sub-skills/feature-column-inputs/`, `deep-ctr-torch/sub-skills/multitask-modeling/`, `deep-ctr-torch/sub-skills/sequence-and-interest-models/`, `deep-ctr-torch/sub-skills/single-task-modeling/`, `deep-ctr-torch/references/repo-provenance.md`.

### `deepctr`

Role: Use this DeepCTR repo skill for CTR/recommender feature columns, Keras models, sequence/session models, multitask models, and legacy TensorFlow Estimator workflows.
Read when: The request names `deepctr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and feature columns, estimator workflows, keras model workflows, multitask models, and sequence models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepctr/SKILL.md`, `deepctr/sub-skills/data-and-feature-columns/`, `deepctr/sub-skills/estimator-workflows/`, `deepctr/sub-skills/keras-model-workflows/`, `deepctr/sub-skills/multitask-models/`, `deepctr/sub-skills/sequence-models/`, `deepctr/references/installation-and-compatibility.md`.

### `fastdup`

Role: Route fastdup workflows for visual dataset curation, annotation-driven analysis, embeddings and search, and video or exchange plumbing.
Read when: The request names `fastdup` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset curation, media and exchange, model enrichment, and structured datasets.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fastdup/SKILL.md`, `fastdup/sub-skills/dataset-curation/`, `fastdup/sub-skills/media-and-exchange/`, `fastdup/sub-skills/model-enrichment/`, `fastdup/sub-skills/structured-datasets/`, `fastdup/references/api-reference.md`.

### `featuretools`

Role: Build, inspect, and reuse Featuretools automated feature engineering workflows for EntitySets, DFS, feature matrices, primitive authoring, feature inspection, and selection.
Read when: The request names `featuretools` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deep feature synthesis, entitysets and data, feature inspection and selection, and primitives and feature definitions.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `featuretools/SKILL.md`, `featuretools/sub-skills/deep-feature-synthesis/`, `featuretools/sub-skills/entitysets-and-data/`, `featuretools/sub-skills/feature-inspection-and-selection/`, `featuretools/sub-skills/primitives-and-feature-definitions/`, `featuretools/references/api-reference.md`.

### `fg-data-profiling`

Role: Guides fg-data-profiling data profiling, report generation, configuration, CLI, comparison, privacy, and optional Spark/notebook integration workflows.
Read when: The request names `fg-data-profiling` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and automation, comparison and quality, configuration and output, integrations and backends, and profiling workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fg-data-profiling/SKILL.md`, `fg-data-profiling/sub-skills/cli-and-automation/`, `fg-data-profiling/sub-skills/comparison-and-quality/`, `fg-data-profiling/sub-skills/configuration-and-output/`, `fg-data-profiling/sub-skills/integrations-and-backends/`, `fg-data-profiling/sub-skills/profiling-workflows/`, `fg-data-profiling/references/development-and-maintenance.md`.

### `fugue`

Role: Operate Fugue workflows, FugueSQL, backend selection, and notebook magics for pandas and distributed dataframe execution.
Read when: The request names `fugue` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backends, notebook, sql, and workflow.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fugue/SKILL.md`, `fugue/sub-skills/backends/`, `fugue/sub-skills/notebook/`, `fugue/sub-skills/sql/`, `fugue/sub-skills/workflow/`, `fugue/references/overview.md`.

### `geonode`

Role: Operate and extend GeoNode geospatial content-management deployments, resource APIs, uploads, metadata/catalogues, GeoServer security, harvesting, and administration with explicit service and safety gates.
Read when: The request names `geonode` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: geoserver and security, harvesting and admin, metadata and catalogue, resource and api, and setup and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `geonode/SKILL.md`, `geonode/sub-skills/geoserver-and-security/`, `geonode/sub-skills/harvesting-and-admin/`, `geonode/sub-skills/metadata-and-catalogue/`, `geonode/sub-skills/resource-and-api/`, `geonode/sub-skills/setup-and-configuration/`, `geonode/references/repo-provenance.md`.

### `hypertools`

Role: Plot, load, analyze, text, and forecast with HyperTools.
Read when: The request names `hypertools` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: forecasting, io, pipeline, text, and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hypertools/SKILL.md`, `hypertools/sub-skills/forecasting/`, `hypertools/sub-skills/io/`, `hypertools/sub-skills/pipeline/`, `hypertools/sub-skills/text/`, `hypertools/sub-skills/visualization/`, `hypertools/references/api-overview.md`.

### `imbalanced-learn`

Role: Router for imbalanced-learn samplers, workflows, metrics, datasets, and balanced batch generators.
Read when: The request names `imbalanced-learn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation and data, model workflows, optional batch generators, and sampling algorithms.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `imbalanced-learn/SKILL.md`, `imbalanced-learn/sub-skills/evaluation-and-data/`, `imbalanced-learn/sub-skills/model-workflows/`, `imbalanced-learn/sub-skills/optional-batch-generators/`, `imbalanced-learn/sub-skills/sampling-algorithms/`, `imbalanced-learn/references/api-overview.md`.

### `koalas`

Role: Use Koalas, the legacy pandas API on Apache Spark, for DataFrame, Spark I/O, SQL, options, plotting, and migration workflows.
Read when: The request names `koalas` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: apply groupby window, configuration extensions, core dataframes, and spark io sql.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `koalas/SKILL.md`, `koalas/sub-skills/apply-groupby-window/`, `koalas/sub-skills/configuration-extensions/`, `koalas/sub-skills/core-dataframes/`, `koalas/sub-skills/spark-io-sql/`, `koalas/references/repo-provenance.md`.

### `lightfm`

Role: Operate LightFM recommendation models, data/feature matrices, evaluation metrics, and repository maintenance workflows.
Read when: The request names `lightfm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data features, evaluation splitting, model training, and repo development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightfm/SKILL.md`, `lightfm/sub-skills/data-features/`, `lightfm/sub-skills/evaluation-splitting/`, `lightfm/sub-skills/model-training/`, `lightfm/sub-skills/repo-development/`, `lightfm/references/repo-provenance.md`.

### `lux`

Role: Use Lux/Lux API for Pandas-integrated visual exploratory data analysis, intent-driven recommendations, chart export, configuration, semantic data types, and optional SQL tables.
Read when: The request names `lux` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration actions, pandas intent recommendations, special data types, sql backend, and visualization export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lux/SKILL.md`, `lux/sub-skills/configuration-actions/`, `lux/sub-skills/pandas-intent-recommendations/`, `lux/sub-skills/special-data-types/`, `lux/sub-skills/sql-backend/`, `lux/sub-skills/visualization-export/`, `lux/references/package-overview.md`.

### `mars`

Role: Routes Mars and pymars users to the right local compute, remote execution, learning, and deployment workflows with verified install, import, and backend guidance.
Read when: The request names `mars` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and backends, learn and integrations, remote and scripts, and tensor dataframe core.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mars/SKILL.md`, `mars/sub-skills/deployment-and-backends/`, `mars/sub-skills/learn-and-integrations/`, `mars/sub-skills/remote-and-scripts/`, `mars/sub-skills/tensor-dataframe-core/`, `mars/references/repo-provenance.md`.

### `missingno`

Role: Guides missingno missing-data visualization, nullity filtering and sorting, package smoke checks, and troubleshooting for pandas DataFrames.
Read when: The request names `missingno` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: nullity utilities and visualizations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `missingno/SKILL.md`, `missingno/sub-skills/nullity-utilities/`, `missingno/sub-skills/visualizations/`, `missingno/references/maintainer-notes.md`, `missingno/references/repo-provenance.md`, `missingno/references/troubleshooting.md`.

### `mlxtend`

Role: Use mlxtend machine-learning extension utilities for estimator ensembles, evaluation, feature workflows, frequent patterns, plotting, datasets, and small helper APIs.
Read when: The request names `mlxtend` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: estimators and ensembles, evaluation and validation, feature workflows, frequent patterns, and plotting and utilities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mlxtend/SKILL.md`, `mlxtend/sub-skills/estimators-and-ensembles/`, `mlxtend/sub-skills/evaluation-and-validation/`, `mlxtend/sub-skills/feature-workflows/`, `mlxtend/sub-skills/frequent-patterns/`, `mlxtend/sub-skills/plotting-and-utilities/`, `mlxtend/references/package-overview.md`.

### `moabb`

Role: Guide MOABB EEG and BCI benchmarking workflows: choose datasets, configure paradigms and sklearn pipelines, run leakage-aware evaluations, and analyze reproducible results.
Read when: The request names `moabb` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and visualization, dataset management, evaluations and benchmarks, and paradigms and pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `moabb/SKILL.md`, `moabb/sub-skills/analysis-and-visualization/`, `moabb/sub-skills/dataset-management/`, `moabb/sub-skills/evaluations-and-benchmarks/`, `moabb/sub-skills/paradigms-and-pipelines/`, `moabb/references/api-overview.md`.

### `modin`

Role: Guide Modin pandas-compatible, distributed dataframe, I/O, engine configuration, interoperability, and experimental extension workflows.
Read when: The request names `modin` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced extensions, core pandas api, engines configuration, and io interoperability.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `modin/SKILL.md`, `modin/sub-skills/advanced-extensions/`, `modin/sub-skills/core-pandas-api/`, `modin/sub-skills/engines-configuration/`, `modin/sub-skills/io-interoperability/`, `modin/references/repo-provenance.md`.

### `nlp-progress`

Role: Routes tasks for using NLP-progress as a multilingual NLP benchmark/SOTA catalog, structured Markdown export source, and static-content maintenance workflow.
Read when: The request names `nlp-progress` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark catalog, content maintenance, and structured export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nlp-progress/SKILL.md`, `nlp-progress/sub-skills/benchmark-catalog/`, `nlp-progress/sub-skills/content-maintenance/`, `nlp-progress/sub-skills/structured-export/`, `nlp-progress/references/corpus-overview.md`, `nlp-progress/references/repo-provenance.md`.

### `nupic-legacy`

Role: Use NuPIC legacy HTM algorithms, OPF prediction, Network API pipelines, swarming search definitions, and data/config validation in Python 2.7-era runtimes.
Read when: The request names `nupic-legacy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and configuration, htm algorithms, network api, opf prediction, and swarming.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nupic-legacy/SKILL.md`, `nupic-legacy/sub-skills/data-and-configuration/`, `nupic-legacy/sub-skills/htm-algorithms/`, `nupic-legacy/sub-skills/network-api/`, `nupic-legacy/sub-skills/opf-prediction/`, `nupic-legacy/sub-skills/swarming/`, `nupic-legacy/references/installation-and-runtime.md`.

### `oasis`

Role: Use OASIS (camel-oasis) for LLM social-media simulations, agent profiles, platform actions, recommendation settings, SQLite traces, and legacy experiment analysis.
Read when: The request names `oasis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent profiles, experiments analysis, platform actions, and simulation workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `oasis/SKILL.md`, `oasis/sub-skills/agent-profiles/`, `oasis/sub-skills/experiments-analysis/`, `oasis/sub-skills/platform-actions/`, `oasis/sub-skills/simulation-workflows/`, `oasis/references/api-overview.md`.

### `prediction-market-analysis`

Role: Route analysis, indexing, and data-ops guidance for the prediction-market-analysis repo.
Read when: The request names `prediction-market-analysis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis, data ops, and indexing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `prediction-market-analysis/SKILL.md`, `prediction-market-analysis/sub-skills/analysis/`, `prediction-market-analysis/sub-skills/data-ops/`, `prediction-market-analysis/sub-skills/indexing/`, `prediction-market-analysis/references/analysis-catalog.md`, `prediction-market-analysis/references/api-reference.md`.

### `recbole`

Role: Use RecBole for recommender-system data preparation, model selection, training, evaluation, tuning, and customization workflows.
Read when: The request names `recbole` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and data, models and customization, and training evaluation and tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `recbole/SKILL.md`, `recbole/sub-skills/configuration-and-data/`, `recbole/sub-skills/models-and-customization/`, `recbole/sub-skills/training-evaluation-and-tuning/`, `recbole/references/api-surface.md`, `recbole/references/repo-provenance.md`.

### `recommenders`

Role: Use Microsoft Recommenders to prepare recommendation data, train and choose recommender models, evaluate offline metrics, tune experiments, and plan optional Spark/GPU/cloud workflows.
Read when: The request names `recommenders` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, modeling, and operations and tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `recommenders/SKILL.md`, `recommenders/sub-skills/data-preparation/`, `recommenders/sub-skills/evaluation/`, `recommenders/sub-skills/modeling/`, `recommenders/sub-skills/operations-and-tuning/`, `recommenders/references/package-overview.md`.

### `river`

Role: Use River for online machine learning with streaming estimators, pipelines, datasets, progressive evaluation, drift, anomaly, clustering, forecasting, bandits, and recommender workflows.
Read when: The request names `river` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: online core api, pipelines and features, specialized workflows, streaming evaluation, and supervised models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `river/SKILL.md`, `river/sub-skills/online-core-api/`, `river/sub-skills/pipelines-and-features/`, `river/sub-skills/specialized-workflows/`, `river/sub-skills/streaming-evaluation/`, `river/sub-skills/supervised-models/`, `river/references/api-map.md`.

### `statsforecast`

Role: Use Nixtla StatsForecast for statistical time-series forecasting, model selection, exogenous regressors, prediction intervals, cross-validation, feature engineering, and optional distributed execution.
Read when: The request names `statsforecast` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core forecasting, distributed execution, feature engineering, and model selection.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `statsforecast/SKILL.md`, `statsforecast/sub-skills/core-forecasting/`, `statsforecast/sub-skills/distributed-execution/`, `statsforecast/sub-skills/feature-engineering/`, `statsforecast/sub-skills/model-selection/`, `statsforecast/references/installation-and-environment.md`.

### `statsmodels`

Role: Use statsmodels for statistical modeling, econometrics, time-series analysis, statistical tests, diagnostics, result summaries, plotting, and maintainer workflows in the statsmodels Python repository.
Read when: The request names `statsmodels` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets results graphics, development and testing, discrete and count models, linear and formula models, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `statsmodels/SKILL.md`, `statsmodels/sub-skills/datasets-results-graphics/`, `statsmodels/sub-skills/development-and-testing/`, `statsmodels/sub-skills/discrete-and-count-models/`, `statsmodels/sub-skills/linear-and-formula-models/`, `statsmodels/sub-skills/statistical-tests-and-diagnostics/`, `statsmodels/references/package-orientation.md`.

### `surprise`

Role: Use Surprise for explicit-feedback recommender workflows: load rating data, fit collaborative-filtering predictors, evaluate and tune models, generate recommendations, and serialize results.
Read when: The request names `surprise` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data loading, evaluation and search, prediction algorithms, and recommendation and analysis.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `surprise/SKILL.md`, `surprise/sub-skills/data-loading/`, `surprise/sub-skills/evaluation-and-search/`, `surprise/sub-skills/prediction-algorithms/`, `surprise/sub-skills/recommendation-and-analysis/`, `surprise/references/overview.md`.

### `sweetviz`

Role: Use Sweetviz to generate pandas EDA reports, compare tabular datasets, configure feature typing, and troubleshoot HTML/notebook output.
Read when: The request names `sweetviz` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and data handling, dataset comparison, and report generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sweetviz/SKILL.md`, `sweetviz/sub-skills/configuration-and-data-handling/`, `sweetviz/sub-skills/dataset-comparison/`, `sweetviz/sub-skills/report-generation/`, `sweetviz/references/compatibility-and-assets.md`, `sweetviz/references/repo-provenance.md`.

### `tensorflow-datasets`

Role: Use TensorFlow Datasets for dataset loading, builder authoring, tfds CLI workflows, external/community formats, Beam scaling, and TFDS-specific troubleshooting.
Read when: The request names `tensorflow-datasets` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: beam and performance, cli workflows, data loading, dataset authoring, and formats and community.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-datasets/SKILL.md`, `tensorflow-datasets/sub-skills/beam-and-performance/`, `tensorflow-datasets/sub-skills/cli-workflows/`, `tensorflow-datasets/sub-skills/data-loading/`, `tensorflow-datasets/sub-skills/dataset-authoring/`, `tensorflow-datasets/sub-skills/formats-and-community/`, `tensorflow-datasets/references/api-overview.md`.

### `umap-learn`

Role: Use the umap-learn package for UMAP dimensionality reduction, supervised and density workflows, aligned embeddings, plotting, and ParametricUMAP.
Read when: The request names `umap-learn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: aligned composition, core embedding, parametric umap, plotting diagnostics, and supervised density.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `umap-learn/SKILL.md`, `umap-learn/sub-skills/aligned-composition/`, `umap-learn/sub-skills/core-embedding/`, `umap-learn/sub-skills/parametric-umap/`, `umap-learn/sub-skills/plotting-diagnostics/`, `umap-learn/sub-skills/supervised-density/`, `umap-learn/references/installation-and-environment.md`.

### `vaex`

Role: Use Vaex for lazy out-of-core DataFrames, file conversion, expressions, analytics, visualization, ML pipelines, servers, and CLI/settings workflows.
Read when: The request names `vaex` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli settings, dataframe core, expressions analytics, io conversion, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vaex/SKILL.md`, `vaex/sub-skills/cli-settings/`, `vaex/sub-skills/dataframe-core/`, `vaex/sub-skills/expressions-analytics/`, `vaex/sub-skills/io-conversion/`, `vaex/sub-skills/ml-pipelines/`, `vaex/references/installation-and-packages.md`.

### `yellowbrick`

Role: Use Yellowbrick visual diagnostics for scikit-learn models, feature/target analysis, clustering, model selection, text visualizers, datasets, styles, and contrib extensions.
Read when: The request names `yellowbrick` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classifier visualizers, cluster model selection, contrib and extensions, feature target visualizers, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yellowbrick/SKILL.md`, `yellowbrick/sub-skills/classifier-visualizers/`, `yellowbrick/sub-skills/cluster-model-selection/`, `yellowbrick/sub-skills/contrib-and-extensions/`, `yellowbrick/sub-skills/feature-target-visualizers/`, `yellowbrick/sub-skills/regressor-visualizers/`, `yellowbrick/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:data-science-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
