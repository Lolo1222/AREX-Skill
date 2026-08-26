# Responsible AI — General

## When To Read

Responsible AI requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:responsible-ai-general:START -->
### `adversarial-robustness-toolbox`

Role: Use Adversarial Robustness Toolbox (ART) for estimator wrappers, adversarial attacks, defences, poisoning/privacy/extraction, metrics, and certification workflows.
Read when: The request names `adversarial-robustness-toolbox` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: estimators and models, evaluation and certification, evasion and preprocessing, poisoning inference extraction, and setup and backends.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `adversarial-robustness-toolbox/SKILL.md`, `adversarial-robustness-toolbox/sub-skills/estimators-and-models/`, `adversarial-robustness-toolbox/sub-skills/evaluation-and-certification/`, `adversarial-robustness-toolbox/sub-skills/evasion-and-preprocessing/`, `adversarial-robustness-toolbox/sub-skills/poisoning-inference-extraction/`, `adversarial-robustness-toolbox/sub-skills/setup-and-backends/`, `adversarial-robustness-toolbox/references/backend-matrix.md`.

### `aif360`

Role: Use IBM AI Fairness 360 for tabular fairness datasets, metrics, bias mitigation algorithms, sklearn-compatible workflows, subgroup detectors, and explainers.
Read when: The request names `aif360` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and metrics, detectors and explainers, mitigation algorithms, and sklearn interface.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `aif360/SKILL.md`, `aif360/sub-skills/datasets-and-metrics/`, `aif360/sub-skills/detectors-and-explainers/`, `aif360/sub-skills/mitigation-algorithms/`, `aif360/sub-skills/sklearn-interface/`, `aif360/references/install-data-and-optional-deps.md`.

### `aix360`

Role: Routes AIX360 explainability tasks across local black-box attribution, counterfactuals and certification, interpretable models, time-series explanations, datasets, and explanation-quality metrics.
Read when: The request names `aix360` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: counterfactual and certification, datasets and metrics, interpretable models, local black box, and time series.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `aix360/SKILL.md`, `aix360/sub-skills/counterfactual-and-certification/`, `aix360/sub-skills/datasets-and-metrics/`, `aix360/sub-skills/interpretable-models/`, `aix360/sub-skills/local-black-box/`, `aix360/sub-skills/time-series/`, `aix360/references/api-overview.md`.

### `alibi`

Role: Routes Alibi users to the right explanation, confidence, prototype, or optional-backend workflow and points them to the bundled helpers needed to run it.
Read when: The request names `alibi` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: anchors local explanations, attribution and shap, confidence prototypes utilities, counterfactuals and similarity, and global tabular explanations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alibi/SKILL.md`, `alibi/sub-skills/anchors-local-explanations/`, `alibi/sub-skills/attribution-and-shap/`, `alibi/sub-skills/confidence-prototypes-utilities/`, `alibi/sub-skills/counterfactuals-and-similarity/`, `alibi/sub-skills/global-tabular-explanations/`, `alibi/references/api-reference.md`.

### `bertviz`

Role: Route BertViz Transformer attention visualization, neuron-view, notebook, and HTML export workflows.
Read when: The request names `bertviz` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: attention views and neuron view.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bertviz/SKILL.md`, `bertviz/sub-skills/attention-views/`, `bertviz/sub-skills/neuron-view/`, `bertviz/references/environment-and-install.md`, `bertviz/references/repo-provenance.md`, `bertviz/references/troubleshooting.md`.

### `fairlearn`

Role: Use Fairlearn to assess group fairness, compute disparity metrics, visualize subgroup performance, and mitigate unfairness with preprocessing, reductions, postprocessing, or adversarial learning.
Read when: The request names `fairlearn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: adversarial, assessment, datasets, installation, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fairlearn/SKILL.md`, `fairlearn/sub-skills/adversarial/`, `fairlearn/sub-skills/assessment/`, `fairlearn/sub-skills/datasets/`, `fairlearn/sub-skills/installation/`, `fairlearn/sub-skills/postprocessing/`, `fairlearn/references/fairness-framing.md`.

### `fate`

Role: Operate FATE 2.2.0 federated-learning deployments, FateFlow Pipeline workflows, local launchers, and component CLI/runtime inspection.
Read when: The request names `fate` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: component runtime, deployment, local launchers, and pipeline workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fate/SKILL.md`, `fate/sub-skills/component-runtime/`, `fate/sub-skills/deployment/`, `fate/sub-skills/local-launchers/`, `fate/sub-skills/pipeline-workflows/`, `fate/references/package-overview.md`.

### `flower`

Role: Route Flower repository tasks for app authoring, strategies and mods, local simulation and deployment, Flower Datasets and examples, and repository maintenance.
Read when: The request names `flower` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: app development, datasets and examples, repository maintenance, simulation and deployment, and strategies and mods.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `flower/SKILL.md`, `flower/sub-skills/app-development/`, `flower/sub-skills/datasets-and-examples/`, `flower/sub-skills/repository-maintenance/`, `flower/sub-skills/simulation-and-deployment/`, `flower/sub-skills/strategies-and-mods/`, `flower/references/repo-provenance.md`.

### `foolbox`

Role: Foolbox operating guidance for wrapping vision models, running adversarial attacks, measuring clean and robust accuracy, handling NumPy/PyTorch/TensorFlow/JAX backends, and loading Foolbox-compatible model-zoo repositories.
Read when: The request names `foolbox` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: attacks, models, and zoo.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `foolbox/SKILL.md`, `foolbox/sub-skills/attacks/`, `foolbox/sub-skills/models/`, `foolbox/sub-skills/zoo/`, `foolbox/references/api-reference.md`, `foolbox/references/repo-provenance.md`.

### `keras-vis`

Role: Routes keras-vis activation maximization, saliency and Grad-CAM, customization, and image utility workflows for legacy Keras/TensorFlow graph-mode models.
Read when: The request names `keras-vis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: activation maximization, image utilities, optimization building blocks, and saliency and cam.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `keras-vis/SKILL.md`, `keras-vis/sub-skills/activation-maximization/`, `keras-vis/sub-skills/image-utilities/`, `keras-vis/sub-skills/optimization-building-blocks/`, `keras-vis/sub-skills/saliency-and-cam/`, `keras-vis/references/installation-and-compatibility.md`.

### `mljar-supervised`

Role: Use MLJAR AutoML for tabular classification, regression, fairness-aware training, reports, persistence, and generated Mercury apps.
Read when: The request names `mljar-supervised` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: app deployment, artifacts reports, data preprocessing, fairness workflows, and training core.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mljar-supervised/SKILL.md`, `mljar-supervised/sub-skills/app-deployment/`, `mljar-supervised/sub-skills/artifacts-reports/`, `mljar-supervised/sub-skills/data-preprocessing/`, `mljar-supervised/sub-skills/fairness-workflows/`, `mljar-supervised/sub-skills/training-core/`, `mljar-supervised/references/package-overview.md`.

### `nesa`

Role: Use the Nesa repository for Equivariant Encryption demos, encrypted AI web UI setup, backend protocol inspection, and Hack EE contest context.
Read when: The request names `nesa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend protocol, encrypted distilbert, security contest, and web ui runtime.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nesa/SKILL.md`, `nesa/sub-skills/backend-protocol/`, `nesa/sub-skills/encrypted-distilbert/`, `nesa/sub-skills/security-contest/`, `nesa/sub-skills/web-ui-runtime/`, `nesa/references/repo-provenance.md`.

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

### `py-syft`

Role: Route PySyft privacy-preserving remote data science, SyftBox sync, datasets, jobs, background services, enclaves, and syft-restrict workflows.
Read when: The request names `py-syft` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auth sync transport, background services, datasets permissions, enclaves restrict, and jobs execution.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `py-syft/SKILL.md`, `py-syft/sub-skills/auth-sync-transport/`, `py-syft/sub-skills/background-services/`, `py-syft/sub-skills/datasets-permissions/`, `py-syft/sub-skills/enclaves-restrict/`, `py-syft/sub-skills/jobs-execution/`, `py-syft/references/package-map.md`.

### `pyrit`

Role: Use Microsoft PyRIT for generative-AI red teaming, prompt targets, scorers, converters, datasets, attack scenarios, scanner CLI, backend, and troubleshooting.
Read when: The request names `pyrit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: attacks scenarios, cli backend scanner, converters datasets, setup memory core, and targets scorers.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyrit/SKILL.md`, `pyrit/sub-skills/attacks-scenarios/`, `pyrit/sub-skills/cli-backend-scanner/`, `pyrit/sub-skills/converters-datasets/`, `pyrit/sub-skills/setup-memory-core/`, `pyrit/sub-skills/targets-scorers/`, `pyrit/references/install-configuration.md`.

### `pytorch-grad-cam`

Role: Guides PyTorch grad-cam workflows for class activation maps, model/task adaptation, CAM metrics, method selection, and troubleshooting.
Read when: The request names `pytorch-grad-cam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cam generation, methods and api, metrics and evaluation, and model task adaptation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-grad-cam/SKILL.md`, `pytorch-grad-cam/sub-skills/cam-generation/`, `pytorch-grad-cam/sub-skills/methods-and-api/`, `pytorch-grad-cam/sub-skills/metrics-and-evaluation/`, `pytorch-grad-cam/sub-skills/model-task-adaptation/`, `pytorch-grad-cam/references/package-overview.md`.

### `secretflow`

Role: Guides SecretFlow workflows for runtime setup, federated data containers, the component CLI, preprocessing/statistics/classical ML, and privacy-oriented deployment tasks.
Read when: The request names `secretflow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analytics, component cli, privacy orchestration, and runtime data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `secretflow/SKILL.md`, `secretflow/sub-skills/analytics/`, `secretflow/sub-skills/component-cli/`, `secretflow/sub-skills/privacy-orchestration/`, `secretflow/sub-skills/runtime-data/`, `secretflow/references/repo-provenance.md`.

### `tensorflow-privacy`

Role: Routes TensorFlow Privacy users who need differentially private training, privacy accounting, query mechanisms, empirical privacy tests, or fast gradient clipping.
Read when: The request names `tensorflow-privacy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: fast clipping, privacy accounting, privacy tests, queries, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-privacy/SKILL.md`, `tensorflow-privacy/sub-skills/fast-clipping/`, `tensorflow-privacy/sub-skills/privacy-accounting/`, `tensorflow-privacy/sub-skills/privacy-tests/`, `tensorflow-privacy/sub-skills/queries/`, `tensorflow-privacy/sub-skills/training/`, `tensorflow-privacy/references/api-overview.md`.

### `yellowbrick`

Role: Use Yellowbrick visual diagnostics for scikit-learn models, feature/target analysis, clustering, model selection, text visualizers, datasets, styles, and contrib extensions.
Read when: The request names `yellowbrick` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classifier visualizers, cluster model selection, contrib and extensions, feature target visualizers, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yellowbrick/SKILL.md`, `yellowbrick/sub-skills/classifier-visualizers/`, `yellowbrick/sub-skills/cluster-model-selection/`, `yellowbrick/sub-skills/contrib-and-extensions/`, `yellowbrick/sub-skills/feature-target-visualizers/`, `yellowbrick/sub-skills/regressor-visualizers/`, `yellowbrick/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:responsible-ai-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
