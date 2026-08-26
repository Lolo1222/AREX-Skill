# Probabilistic and Causal Modeling — General

## When To Read

Probabilistic and Causal Modeling requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:probabilistic-and-causal-modeling-general:START -->
### `causalml`

Role: Use CausalML for causal inference, uplift modeling, matching, validation, interpretation, and treatment optimization workflows.
Read when: The request names `causalml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and decision, causal estimation, data preparation, deep models, and tree models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `causalml/SKILL.md`, `causalml/sub-skills/analysis-and-decision/`, `causalml/sub-skills/causal-estimation/`, `causalml/sub-skills/data-preparation/`, `causalml/sub-skills/deep-models/`, `causalml/sub-skills/tree-models/`, `causalml/references/repo-provenance.md`.

### `causalnex`

Role: Use CausalNex to learn causal structures, fit Bayesian networks, discretize features, generate synthetic graph data, and run inference, evaluation, and latent-variable workflows.
Read when: The request names `causalnex` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: bayesian networks, discretization, structure learning, and synthetic data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `causalnex/SKILL.md`, `causalnex/sub-skills/bayesian-networks/`, `causalnex/sub-skills/discretization/`, `causalnex/sub-skills/structure-learning/`, `causalnex/sub-skills/synthetic-data/`, `causalnex/references/api-reference.md`.

### `dowhy`

Role: Route DoWhy causal inference, graphical causal model, and graph/data workflows to the right sub-skill and bundled references.
Read when: The request names `dowhy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data graph interfaces, effect estimation, and graphical causal models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dowhy/SKILL.md`, `dowhy/sub-skills/data-graph-interfaces/`, `dowhy/sub-skills/effect-estimation/`, `dowhy/sub-skills/graphical-causal-models/`, `dowhy/references/optional-integrations.md`, `dowhy/references/package-overview.md`.

### `manim-ml`

Role: Use ManimML to build Manim Community animations and visual explanations for machine-learning concepts, especially neural-network diagrams, decision trees, MCMC, probability, and plotting workflows.
Read when: The request names `manim-ml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: neural network visualization and statistical visualizations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `manim-ml/SKILL.md`, `manim-ml/sub-skills/neural-network-visualization/`, `manim-ml/sub-skills/statistical-visualizations/`, `manim-ml/references/repo-provenance.md`, `manim-ml/references/troubleshooting.md`, `manim-ml/scripts/check_manimml_environment.py`.

### `numpyro`

Role: Route NumPyro probabilistic programming tasks across modeling primitives, distributions, MCMC diagnostics, SVI/autoguides, JAX backends, and optional contrib workflows.
Read when: The request names `numpyro` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced contrib, distributions transforms, mcmc diagnostics, modeling primitives, and svi autoguides.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `numpyro/SKILL.md`, `numpyro/sub-skills/advanced-contrib/`, `numpyro/sub-skills/distributions-transforms/`, `numpyro/sub-skills/mcmc-diagnostics/`, `numpyro/sub-skills/modeling-primitives/`, `numpyro/sub-skills/svi-autoguides/`, `numpyro/references/getting-started.md`.

### `orbit-ml`

Role: Use Orbit's Bayesian time-series models, diagnostics, utilities, and custom-model internals for forecasting, backtesting, and model-construction tasks.
Read when: The request names `orbit-ml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom models, evaluation, forecasting, ktr, and utilities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `orbit-ml/SKILL.md`, `orbit-ml/sub-skills/custom-models/`, `orbit-ml/sub-skills/evaluation/`, `orbit-ml/sub-skills/forecasting/`, `orbit-ml/sub-skills/ktr/`, `orbit-ml/sub-skills/utilities/`, `orbit-ml/references/model-overview.md`.

### `pgmpy`

Role: Route pgmpy causal and probabilistic graphical-model tasks to focused modeling, learning, inference, causal, data I/O, and extension workflows.
Read when: The request names `pgmpy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: causal identification and effects, data io and evaluation, extending pgmpy, inference sampling and simulation, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pgmpy/SKILL.md`, `pgmpy/sub-skills/causal-identification-and-effects/`, `pgmpy/sub-skills/data-io-and-evaluation/`, `pgmpy/sub-skills/extending-pgmpy/`, `pgmpy/sub-skills/inference-sampling-and-simulation/`, `pgmpy/sub-skills/learning-structure-and-parameters/`, `pgmpy/references/package-map.md`.

### `pomegranate`

Role: Guides pomegranate probabilistic modeling workflows: distributions, mixture models, Bayesian classifiers, Bayesian networks, factor graphs, HMMs, Markov chains, KMeans, and PyTorch-backed training features.
Read when: The request names `pomegranate` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clustering, distributions, graph models, mixtures and classifiers, and sequence models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pomegranate/SKILL.md`, `pomegranate/sub-skills/clustering/`, `pomegranate/sub-skills/distributions/`, `pomegranate/sub-skills/graph-models/`, `pomegranate/sub-skills/mixtures-and-classifiers/`, `pomegranate/sub-skills/sequence-models/`, `pomegranate/references/feature-guide.md`.

### `pyflux`

Role: Use PyFlux 0.4.17 for time-series modeling, forecasting, probabilistic inference, ARIMA/GARCH/GAS/state-space/VAR/GPNARX workflows, and package-specific troubleshooting.
Read when: The request names `pyflux` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: gas models, multivariate models, state space models, univariate models, and volatility models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyflux/SKILL.md`, `pyflux/sub-skills/gas-models/`, `pyflux/sub-skills/multivariate-models/`, `pyflux/sub-skills/state-space-models/`, `pyflux/sub-skills/univariate-models/`, `pyflux/sub-skills/volatility-models/`, `pyflux/references/families-and-inference.md`.

### `pymc`

Role: Use PyMC for Bayesian probabilistic programming, model construction, distributions, MCMC/NUTS inference, predictive checks, diagnostics, and advanced GP/ODE/VI workflows.
Read when: The request names `pymc` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced workflows, distributions logprob, inference predictive, and modeling data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pymc/SKILL.md`, `pymc/sub-skills/advanced-workflows/`, `pymc/sub-skills/distributions-logprob/`, `pymc/sub-skills/inference-predictive/`, `pymc/sub-skills/modeling-data/`, `pymc/references/installation-and-environment.md`.

### `pyro`

Role: Use Pyro probabilistic programming APIs for models, distributions, SVI, MCMC, poutine, enumeration, and contrib workflows.
Read when: The request names `pyro` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: contrib and domain workflows, distributions and shapes, effect handlers and enumeration, mcmc and prediction, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyro/SKILL.md`, `pyro/sub-skills/contrib-and-domain-workflows/`, `pyro/sub-skills/distributions-and-shapes/`, `pyro/sub-skills/effect-handlers-and-enumeration/`, `pyro/sub-skills/mcmc-and-prediction/`, `pyro/sub-skills/modeling-basics/`, `pyro/references/api-cheatsheet.md`.

### `statsmodels`

Role: Use statsmodels for statistical modeling, econometrics, time-series analysis, statistical tests, diagnostics, result summaries, plotting, and maintainer workflows in the statsmodels Python repository.
Read when: The request names `statsmodels` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets results graphics, development and testing, discrete and count models, linear and formula models, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `statsmodels/SKILL.md`, `statsmodels/sub-skills/datasets-results-graphics/`, `statsmodels/sub-skills/development-and-testing/`, `statsmodels/sub-skills/discrete-and-count-models/`, `statsmodels/sub-skills/linear-and-formula-models/`, `statsmodels/sub-skills/statistical-tests-and-diagnostics/`, `statsmodels/references/package-orientation.md`.

### `zhusuan`

Role: Use ZhuSuan for Bayesian networks, variational inference, HMC/SG-MCMC sampling, and importance-sampling workflows on TensorFlow 1.x.
Read when: The request names `zhusuan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: mcmc and sampling, modeling primitives, and variational inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `zhusuan/SKILL.md`, `zhusuan/sub-skills/mcmc-and-sampling/`, `zhusuan/sub-skills/modeling-primitives/`, `zhusuan/sub-skills/variational-inference/`, `zhusuan/references/api-reference.md`, `zhusuan/references/overview.md`.

<!-- DISCO_SCENARIO:probabilistic-and-causal-modeling-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
