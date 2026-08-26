# Scientific Computing — General

## When To Read

Scientific Computing requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:scientific-computing-general:START -->
### `alphafold2`

Role: Guide alphafold2-pytorch protein sequence, MSA, distogram, angle-logit, coordinate-refinement, recycling, embedding, and structure-utility workflows with version-aware troubleshooting.
Read when: The request names `alphafold2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core model, embeddings, structure and recycling, and utilities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alphafold2/SKILL.md`, `alphafold2/sub-skills/core-model/`, `alphafold2/sub-skills/embeddings/`, `alphafold2/sub-skills/structure-and-recycling/`, `alphafold2/sub-skills/utilities/`, `alphafold2/references/limitations.md`.

### `alphafold3-pytorch`

Role: Use AlphaFold 3 PyTorch for protein and biomolecular structure-prediction workflows, heterogeneous molecule inputs, PDB/mmCIF/MSA/template preparation, bounded model inference, training configuration, and local CLI or Gradio operation.
Read when: The request names `alphafold3-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli serving, data pipeline, input representation, model inference, and training configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alphafold3-pytorch/SKILL.md`, `alphafold3-pytorch/sub-skills/cli-serving/`, `alphafold3-pytorch/sub-skills/data-pipeline/`, `alphafold3-pytorch/sub-skills/input-representation/`, `alphafold3-pytorch/sub-skills/model-inference/`, `alphafold3-pytorch/sub-skills/training-configuration/`, `alphafold3-pytorch/references/environment-and-dependencies.md`.

### `apod-api`

Role: Use NASA's apod-api Flask service and standalone APOD parser for date, count, range, media, deployment, Docker, and troubleshooting workflows.
Read when: The request names `apod-api` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api service, deployment and operations, and parser and media.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `apod-api/SKILL.md`, `apod-api/sub-skills/api-service/`, `apod-api/sub-skills/deployment-and-operations/`, `apod-api/sub-skills/parser-and-media/`, `apod-api/references/repo-provenance.md`, `apod-api/references/troubleshooting.md`.

### `arcgis-python-api`

Role: Use ArcGIS API for Python for GIS administration, spatial dataframes, feature/raster analysis, mapping, location services, geospatial deep learning, app automation, and Knowledge Graph workflows.
Read when: The request names `arcgis-python-api` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: apps knowledge ai services, deep learning, features dataframes analysis, gis admin content, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `arcgis-python-api/SKILL.md`, `arcgis-python-api/sub-skills/apps-knowledge-ai-services/`, `arcgis-python-api/sub-skills/deep-learning/`, `arcgis-python-api/sub-skills/features-dataframes-analysis/`, `arcgis-python-api/sub-skills/gis-admin-content/`, `arcgis-python-api/sub-skills/imagery-raster-analysis/`, `arcgis-python-api/references/deployment-and-sample-operations.md`.

### `astropy`

Role: Use Astropy core for astronomy units, coordinates, times, tables, FITS/WCS files, modeling, statistics, visualization, cosmology, configuration, and public CLIs.
Read when: The request names `astropy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli config data, cosmology, modeling stats timeseries, tables io, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `astropy/SKILL.md`, `astropy/sub-skills/cli-config-data/`, `astropy/sub-skills/cosmology/`, `astropy/sub-skills/modeling-stats-timeseries/`, `astropy/sub-skills/tables-io/`, `astropy/sub-skills/time-coordinates/`, `astropy/references/package-overview.md`.

### `bindcraft`

Role: Guide CUDA-enabled BindCraft protein-binder design from target PDB preparation through AF2/MPNN/PyRosetta execution, filtering, output analysis, and conservative troubleshooting.
Read when: The request names `bindcraft` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: design pipeline, results analysis, and target preparation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bindcraft/SKILL.md`, `bindcraft/sub-skills/design-pipeline/`, `bindcraft/sub-skills/results-analysis/`, `bindcraft/sub-skills/target-preparation/`, `bindcraft/references/configuration.md`, `bindcraft/references/installation.md`.

### `biopython`

Role: Route Biopython computational biology workflows across sequence objects, file formats, alignments, structures, web databases, BioSQL, motifs, restriction enzymes, and specialized modules.
Read when: The request names `biopython` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: alignment search and phylogeny, file io and format conversion, sequence objects and features, specialized analyses and graphics, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `biopython/SKILL.md`, `biopython/sub-skills/alignment-search-and-phylogeny/`, `biopython/sub-skills/file-io-and-format-conversion/`, `biopython/sub-skills/sequence-objects-and-features/`, `biopython/sub-skills/specialized-analyses-and-graphics/`, `biopython/sub-skills/structural-bioinformatics/`, `biopython/references/capability-map.md`.

### `brian2`

Role: Use Brian2 for clock-driven spiking-neural-network modeling, simulation, synaptic connectivity, input generation, recording, physical-unit equations, spatial neurons, runtime code generation, and C++ standalone workflows.
Read when: The request names `brian2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: code generation, configuration and troubleshooting, modeling, recording, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `brian2/SKILL.md`, `brian2/sub-skills/code-generation/`, `brian2/sub-skills/configuration-and-troubleshooting/`, `brian2/sub-skills/modeling/`, `brian2/sub-skills/recording/`, `brian2/sub-skills/simulation-and-recording/`, `brian2/references/repo-provenance.md`.

### `cirq`

Role: Use Cirq to build, simulate, transform, serialize, validate, and provider-package quantum circuits.
Read when: The request names `cirq` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: algorithms and observables, core circuits and ops, hardware providers and serialization, simulation study and noise, and transformers and compilation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cirq/SKILL.md`, `cirq/sub-skills/algorithms-and-observables/`, `cirq/sub-skills/core-circuits-and-ops/`, `cirq/sub-skills/hardware-providers-and-serialization/`, `cirq/sub-skills/simulation-study-and-noise/`, `cirq/sub-skills/transformers-and-compilation/`, `cirq/references/package-overview.md`.

### `clawbio`

Role: Use ClawBio for local-first bioinformatics agent workflows: install and run its skill library, route genomic or omics inputs, create reproducible reports, connect optional MCP or Nextflow integrations, and author or validate skills.
Read when: The request names `clawbio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core runner, domain routing, pipelines integrations, skill authoring, and validation safety.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `clawbio/SKILL.md`, `clawbio/sub-skills/core-runner/`, `clawbio/sub-skills/domain-routing/`, `clawbio/sub-skills/pipelines-integrations/`, `clawbio/sub-skills/skill-authoring/`, `clawbio/sub-skills/validation-safety/`, `clawbio/references/repo-provenance.md`.

### `coronavirus`

Role: Use the Folding@home coronavirus repository conventions to curate molecular structures, prepare bounded OpenMM systems, and preserve target, publication, and provenance notes.
Read when: The request names `coronavirus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: project context, structure curation, and system preparation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `coronavirus/SKILL.md`, `coronavirus/sub-skills/project-context/`, `coronavirus/sub-skills/structure-curation/`, `coronavirus/sub-skills/system-preparation/`, `coronavirus/references/repo-provenance.md`, `coronavirus/references/troubleshooting.md`.

### `deepxde`

Role: Use DeepXDE for scientific machine learning, PINNs, DeepONet/operator learning, backend selection, training, and troubleshooting.
Read when: The request names `deepxde` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend and configuration, operator learning, pinn problem setup, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepxde/SKILL.md`, `deepxde/sub-skills/backend-and-configuration/`, `deepxde/sub-skills/operator-learning/`, `deepxde/sub-skills/pinn-problem-setup/`, `deepxde/sub-skills/training-workflows/`, `deepxde/references/backend-and-installation.md`.

### `dive-into-graphs`

Role: Use DIG (Dive into Graphs) to load graph-learning datasets, run graph generation, self-supervised learning, GNN explainability, 3D graph learning, GOOD OOD datasets, graph augmentation, fair graph learning, and large-scale graph workflows.
Read when: The request names `dive-into-graphs` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: fair graph learning, good ood datasets, graph augmentation, graph explainability, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dive-into-graphs/SKILL.md`, `dive-into-graphs/sub-skills/fair-graph-learning/`, `dive-into-graphs/sub-skills/good-ood-datasets/`, `dive-into-graphs/sub-skills/graph-augmentation/`, `dive-into-graphs/sub-skills/graph-explainability/`, `dive-into-graphs/sub-skills/large-scale-graphs/`, `dive-into-graphs/references/capability-map.md`.

### `earth2studio`

Role: Guides Earth2Studio weather and climate inference workflows, data access, model and component selection, output/checkpoint handling, extension, and optional REST serving with backend-aware validation.
Read when: The request names `earth2studio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data sources, ensembles, installation discovery, io checkpointing, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `earth2studio/SKILL.md`, `earth2studio/sub-skills/data-sources/`, `earth2studio/sub-skills/ensembles/`, `earth2studio/sub-skills/installation-discovery/`, `earth2studio/sub-skills/io-checkpointing/`, `earth2studio/sub-skills/models-and-assimilation/`, `earth2studio/references/repo-provenance.md`.

### `geemap`

Role: Use geemap for Google Earth Engine interactive mapping, geospatial conversion, visualization, timelapse, and ML helper workflows.
Read when: The request names `geemap` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion and io, interactive earth engine maps, machine learning and ai, timelapse and apps, and visualization and charts.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `geemap/SKILL.md`, `geemap/sub-skills/conversion-and-io/`, `geemap/sub-skills/interactive-earth-engine-maps/`, `geemap/sub-skills/machine-learning-and-ai/`, `geemap/sub-skills/timelapse-and-apps/`, `geemap/sub-skills/visualization-and-charts/`, `geemap/references/installation-and-auth.md`.

### `gempy`

Role: Use GemPy 3.x for CPU-first 3-D implicit geological modeling, structural data preparation, grid evaluation, visualization, persistence, and optional integrations.
Read when: The request names `gempy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and structure, environment and troubleshooting, grids and visualization, modeling, and serialization and advanced.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gempy/SKILL.md`, `gempy/sub-skills/data-and-structure/`, `gempy/sub-skills/environment-and-troubleshooting/`, `gempy/sub-skills/grids-and-visualization/`, `gempy/sub-skills/modeling/`, `gempy/sub-skills/serialization-and-advanced/`, `gempy/references/repo-provenance.md`.

### `geoai`

Role: Route GeoAI geospatial data, inference, training, foundation-model, and integration workflows.
Read when: The request names `geoai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: detection segmentation inference, foundation models embeddings vlms, geospatial data pipelines, integrations agents qgis mcp, and training and finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `geoai/SKILL.md`, `geoai/sub-skills/detection-segmentation-inference/`, `geoai/sub-skills/foundation-models-embeddings-vlms/`, `geoai/sub-skills/geospatial-data-pipelines/`, `geoai/sub-skills/integrations-agents-qgis-mcp/`, `geoai/sub-skills/training-and-finetuning/`, `geoai/references/installation-and-environment.md`.

### `gget`

Role: Use gget for genomic database queries, Ensembl annotation and sequences, sequence comparison, expression and single-cell omics retrieval, disease/structure lookups, viral filtering, mutation generation, and the gget CLI or Python API.
Read when: The request names `gget` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: disease structure, expression omics, gene annotation, sequence tools, and specialized workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gget/SKILL.md`, `gget/sub-skills/disease-structure/`, `gget/sub-skills/expression-omics/`, `gget/sub-skills/gene-annotation/`, `gget/sub-skills/sequence-tools/`, `gget/sub-skills/specialized-workflows/`, `gget/references/api-overview.md`.

### `graphormer`

Role: Routes Graphormer users to fairseq training, dataset customization, pretrained evaluation, model extension, and DiG workflows.
Read when: The request names `graphormer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and customization, distributional graphormer, fairseq training, model extension, and pretrained and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `graphormer/SKILL.md`, `graphormer/sub-skills/datasets-and-customization/`, `graphormer/sub-skills/distributional-graphormer/`, `graphormer/sub-skills/fairseq-training/`, `graphormer/sub-skills/model-extension/`, `graphormer/sub-skills/pretrained-and-evaluation/`, `graphormer/references/installation-and-environment.md`.

### `kaolin`

Role: Route NVIDIA Kaolin repository workflows for 3D deep learning geometry I/O, operations, rendering, physics, visualization, installation, and backend troubleshooting.
Read when: The request names `kaolin` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: geometry io representations, ops metrics conversions, physics simulation, rendering cameras lighting, and visualization workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kaolin/SKILL.md`, `kaolin/sub-skills/geometry-io-representations/`, `kaolin/sub-skills/ops-metrics-conversions/`, `kaolin/sub-skills/physics-simulation/`, `kaolin/sub-skills/rendering-cameras-lighting/`, `kaolin/sub-skills/visualization-workflows/`, `kaolin/references/api-overview.md`.

### `mattergen`

Role: Guide MatterGen inorganic-crystal generation, structure evaluation, dataset preparation, Hydra training, and property fine-tuning with CUDA-aware validation and safe artifact handling.
Read when: The request names `mattergen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, generation, and training finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mattergen/SKILL.md`, `mattergen/sub-skills/data-preparation/`, `mattergen/sub-skills/evaluation/`, `mattergen/sub-skills/generation/`, `mattergen/sub-skills/training-finetuning/`, `mattergen/references/api-and-cli-overview.md`.

### `mesa`

Role: Use Mesa for agent-based simulation models, spatial ABM environments, experiment data collection, scenarios, and Solara visualization workflows.
Read when: The request names `mesa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis experiments, model core, spaces, and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mesa/SKILL.md`, `mesa/sub-skills/analysis-experiments/`, `mesa/sub-skills/model-core/`, `mesa/sub-skills/spaces/`, `mesa/sub-skills/visualization/`, `mesa/references/examples-index.md`.

### `mirofish`

Role: Use MiroFish's Flask and Vue social-simulation engine to build Zep graphs from documents, prepare OASIS simulations, run them, and generate interactive reports.
Read when: The request names `mirofish` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: graph build, reporting, simulation run, and simulation setup.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mirofish/SKILL.md`, `mirofish/sub-skills/graph-build/`, `mirofish/sub-skills/reporting/`, `mirofish/sub-skills/simulation-run/`, `mirofish/sub-skills/simulation-setup/`, `mirofish/references/architecture-and-state.md`.

### `molecularnodes`

Role: Use MolecularNodes 5.2 in a Blender 5.2 host to import, style, animate, annotate, analyze, and render molecular structures, trajectories, density maps, and ensembles with verified API and recovery guidance.
Read when: The request names `molecularnodes` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: density and ensembles, molecules and styles, scene and rendering, setup and import, and trajectories and annotations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `molecularnodes/SKILL.md`, `molecularnodes/sub-skills/density-and-ensembles/`, `molecularnodes/sub-skills/molecules-and-styles/`, `molecularnodes/sub-skills/scene-and-rendering/`, `molecularnodes/sub-skills/setup-and-import/`, `molecularnodes/sub-skills/trajectories-and-annotations/`, `molecularnodes/references/repo-provenance.md`.

### `ncbi-genome-download`

Role: Guide safe, reproducible NCBI genome retrieval with ncbi-genome-download, including CLI/API filtering, dry runs, output integrity, metadata, and optional taxonomy expansion.
Read when: The request names `ncbi-genome-download` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: download and filter, output and integrity, and taxonomy helper.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ncbi-genome-download/SKILL.md`, `ncbi-genome-download/sub-skills/download-and-filter/`, `ncbi-genome-download/sub-skills/output-and-integrity/`, `ncbi-genome-download/sub-skills/taxonomy-helper/`, `ncbi-genome-download/references/repo-provenance.md`, `ncbi-genome-download/references/troubleshooting.md`.

### `neuromancer`

Role: Guide NeuroMANCER 1.5.6 differentiable scientific machine-learning workflows for constrained optimization, dynamics modeling, data and training, predictive control, simulation, and structured operators.
Read when: The request names `neuromancer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: control simulation, data training, dynamics modeling, structured operators, and symbolic problems.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `neuromancer/SKILL.md`, `neuromancer/sub-skills/control-simulation/`, `neuromancer/sub-skills/data-training/`, `neuromancer/sub-skills/dynamics-modeling/`, `neuromancer/sub-skills/structured-operators/`, `neuromancer/sub-skills/symbolic-problems/`, `neuromancer/references/installation-and-overview.md`.

### `newton`

Role: Use Newton physics engine APIs for robotics simulation, solvers, contacts, asset import/export, sensors, viewers, examples, and repository maintenance.
Read when: The request names `newton` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: asset import export, modeling simulation, robotics control, sensors visualization, and solvers contacts.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `newton/SKILL.md`, `newton/sub-skills/asset-import-export/`, `newton/sub-skills/modeling-simulation/`, `newton/sub-skills/robotics-control/`, `newton/sub-skills/sensors-visualization/`, `newton/sub-skills/solvers-contacts/`, `newton/references/development-maintenance.md`.

### `oasis`

Role: Use OASIS (camel-oasis) for LLM social-media simulations, agent profiles, platform actions, recommendation settings, SQLite traces, and legacy experiment analysis.
Read when: The request names `oasis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent profiles, experiments analysis, platform actions, and simulation workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `oasis/SKILL.md`, `oasis/sub-skills/agent-profiles/`, `oasis/sub-skills/experiments-analysis/`, `oasis/sub-skills/platform-actions/`, `oasis/sub-skills/simulation-workflows/`, `oasis/references/api-overview.md`.

### `obspy`

Role: Guides seismological data workflows with ObsPy, including waveform processing, format conversion, event and station metadata, FDSN or local archive access, signal analysis, travel times, geodesy, and headless imaging.
Read when: The request names `obspy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data access, formats and metadata, signal analysis, travel times and imaging, and waveform processing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `obspy/SKILL.md`, `obspy/sub-skills/data-access/`, `obspy/sub-skills/formats-and-metadata/`, `obspy/sub-skills/signal-analysis/`, `obspy/sub-skills/travel-times-and-imaging/`, `obspy/sub-skills/waveform-processing/`, `obspy/references/repo-provenance.md`.

### `openfermion`

Role: Guide OpenFermion workflows for fermionic and qubit operator algebra, Hamiltonian construction, quantum-chemistry data, circuit synthesis, sparse analysis, measurements, and resource-oriented utilities.
Read when: The request names `openfermion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and measurements, circuits and simulation, hamiltonians and chemistry, and operators and transforms.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openfermion/SKILL.md`, `openfermion/sub-skills/analysis-and-measurements/`, `openfermion/sub-skills/circuits-and-simulation/`, `openfermion/sub-skills/hamiltonians-and-chemistry/`, `openfermion/sub-skills/operators-and-transforms/`, `openfermion/references/api-index.md`.

### `openmc`

Role: Guide OpenMC Python and native Monte Carlo particle-transport workflows: install and build the runtime, construct models, prepare nuclear data and depletion, inspect tallies/results, and diagnose optional solver integrations.
Read when: The request names `openmc` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced solvers, model geometry, nuclear data depletion, setup runtime, and tallies results.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openmc/SKILL.md`, `openmc/sub-skills/advanced-solvers/`, `openmc/sub-skills/model-geometry/`, `openmc/sub-skills/nuclear-data-depletion/`, `openmc/sub-skills/setup-runtime/`, `openmc/sub-skills/tallies-results/`, `openmc/references/repo-provenance.md`.

### `openqasm`

Role: Use the OpenQASM 3 specification, reference grammar, and openqasm3 Python AST toolkit to author, validate, inspect, transform, and troubleshoot quantum circuit intermediate-representation source.
Read when: The request names `openqasm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: grammar conformance, language authoring, and python ast tooling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openqasm/SKILL.md`, `openqasm/sub-skills/grammar-conformance/`, `openqasm/sub-skills/language-authoring/`, `openqasm/sub-skills/python-ast-tooling/`, `openqasm/references/ecosystem-boundaries.md`, `openqasm/references/repo-provenance.md`.

### `pdebench`

Role: Guide PDEBench scientific-machine-learning benchmark workflows for PDE dataset preparation, simulation generation, baseline neural operators, PINNs, inverse models, metrics, and safe result analysis.
Read when: The request names `pdebench` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and download, data generation, and models and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pdebench/SKILL.md`, `pdebench/sub-skills/data-and-download/`, `pdebench/sub-skills/data-generation/`, `pdebench/sub-skills/models-and-evaluation/`, `pdebench/references/installation-and-compatibility.md`, `pdebench/references/repo-provenance.md`.

### `pennylane`

Role: Use PennyLane for quantum circuits, differentiable QNodes, devices, transforms, domain modules, data/io, and source-repo maintenance.
Read when: The request names `pennylane` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: applications qchem resource, circuits devices, gradients interfaces, io data logging, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pennylane/SKILL.md`, `pennylane/sub-skills/applications-qchem-resource/`, `pennylane/sub-skills/circuits-devices/`, `pennylane/sub-skills/gradients-interfaces/`, `pennylane/sub-skills/io-data-logging/`, `pennylane/sub-skills/operators-transforms/`, `pennylane/references/development-conventions.md`.

### `phi-flow`

Role: Routes PhiFlow simulation, geometry, optimization, and visualization workflows through focused sub-skills.
Read when: The request names `phi-flow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core data and geometry, installation and backends, optimization and learning, physics and simulation, and visualization and ui.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `phi-flow/SKILL.md`, `phi-flow/sub-skills/core-data-and-geometry/`, `phi-flow/sub-skills/installation-and-backends/`, `phi-flow/sub-skills/optimization-and-learning/`, `phi-flow/sub-skills/physics-and-simulation/`, `phi-flow/sub-skills/visualization-and-ui/`, `phi-flow/references/repo-provenance.md`.

### `physicsnemo`

Role: Route PhysicsNeMo users to the right model, data, scaling, mesh, diffusion, active-learning, or deployment workflow.
Read when: The request names `physicsnemo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: active learning and deployment, datapipes, diffusion and generative, distributed and domain parallel, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `physicsnemo/SKILL.md`, `physicsnemo/sub-skills/active-learning-and-deployment/`, `physicsnemo/sub-skills/datapipes/`, `physicsnemo/sub-skills/diffusion-and-generative/`, `physicsnemo/sub-skills/distributed-and-domain-parallel/`, `physicsnemo/sub-skills/mesh-and-geometry/`, `physicsnemo/references/install-and-environment.md`.

### `physo`

Role: Use PhySO for symbolic regression, class symbolic regression, toolkit-level expression workflows, and benchmark problem loaders.
Read when: The request names `physo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmarks, class sr, sr, and toolkit.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `physo/SKILL.md`, `physo/sub-skills/benchmarks/`, `physo/sub-skills/class-sr/`, `physo/sub-skills/sr/`, `physo/sub-skills/toolkit/`, `physo/references/install-and-smoke.md`.

### `pycirclize`

Role: Use pyCirclize 1.10.1 for circular visualization, Circos plots, chord and radar charts, genomic feature plots, phylogenetic trees, parser-driven layouts, and deterministic Matplotlib export.
Read when: The request names `pycirclize` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: circular composition, data parsers, genomics and trees, and plot primitives.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pycirclize/SKILL.md`, `pycirclize/sub-skills/circular-composition/`, `pycirclize/sub-skills/data-parsers/`, `pycirclize/sub-skills/genomics-and-trees/`, `pycirclize/sub-skills/plot-primitives/`, `pycirclize/references/repo-provenance.md`.

### `pypsa`

Role: Guides PyPSA power-system network modeling, data I/O, optimization, power flow, statistics, plotting, clustering, and troubleshooting workflows.
Read when: The request names `pypsa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis visualization, network io data, network modeling, and optimization powerflow.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pypsa/SKILL.md`, `pypsa/sub-skills/analysis-visualization/`, `pypsa/sub-skills/network-io-data/`, `pypsa/sub-skills/network-modeling/`, `pypsa/sub-skills/optimization-powerflow/`, `pypsa/references/install-and-environment.md`.

### `pyquil`

Role: Guides PyQuil and Quil quantum-programming workflows: author programs, simulate locally, compile and execute through QVM or QPU services, model noise and experiments, and inspect processor topologies and ISA metadata.
Read when: The request names `pyquil` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: compile execute, noise experiments, processor isa, program authoring, and simulation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyquil/SKILL.md`, `pyquil/sub-skills/compile-execute/`, `pyquil/sub-skills/noise-experiments/`, `pyquil/sub-skills/processor-isa/`, `pyquil/sub-skills/program-authoring/`, `pyquil/sub-skills/simulation/`, `pyquil/references/concepts-and-runtime-boundaries.md`.

### `qiskit`

Role: Routes agents across Qiskit's circuit, transpiler, primitives, serialization, quantum-info, visualization, provider, and C-API workflows.
Read when: The request names `qiskit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: c api, circuit, primitives, providers, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `qiskit/SKILL.md`, `qiskit/sub-skills/c-api/`, `qiskit/sub-skills/circuit/`, `qiskit/sub-skills/primitives/`, `qiskit/sub-skills/providers/`, `qiskit/sub-skills/quantum-info/`, `qiskit/references/installation.md`.

### `qiskit-machine-learning`

Role: Guides public Qiskit Machine Learning workflows for quantum classifiers and regressors, quantum kernels, QNNs and gradients, optimizers, datasets, circuits, reference primitives, and PyTorch connectors.
Read when: The request names `qiskit-machine-learning` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: algorithms, data circuits connectors, kernels fidelity, optimizers, and qnn gradients.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `qiskit-machine-learning/SKILL.md`, `qiskit-machine-learning/sub-skills/algorithms/`, `qiskit-machine-learning/sub-skills/data-circuits-connectors/`, `qiskit-machine-learning/sub-skills/kernels-fidelity/`, `qiskit-machine-learning/sub-skills/optimizers/`, `qiskit-machine-learning/sub-skills/qnn-gradients/`, `qiskit-machine-learning/references/api-surface.md`.

### `quip-miner`

Role: Use this repo skill for QuIP quip-miner, the Substrate-integrated quantum mining CLI, when configuring or operating CPU/CUDA/Metal/Modal/QPU miners, managing hybrid wallets/bootstrap/identity, telemetry, topology/proof validation, deployment, or maintainer tests.
Read when: The request names `quip-miner` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: config supervisor deployment, identity wallet bootstrap, maintainer testing release, mining backends, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `quip-miner/SKILL.md`, `quip-miner/sub-skills/config-supervisor-deployment/`, `quip-miner/sub-skills/identity-wallet-bootstrap/`, `quip-miner/sub-skills/maintainer-testing-release/`, `quip-miner/sub-skills/mining-backends/`, `quip-miner/sub-skills/telemetry-attempt-archive/`, `quip-miner/references/installation-and-environment.md`.

### `qutip`

Role: Router for QuTiP quantum-object construction, solver, open-system, and visualization workflows.
Read when: The request names `qutip` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and io, core objects, dynamics and solvers, and specialized open systems.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `qutip/SKILL.md`, `qutip/sub-skills/analysis-and-io/`, `qutip/sub-skills/core-objects/`, `qutip/sub-skills/dynamics-and-solvers/`, `qutip/sub-skills/specialized-open-systems/`, `qutip/references/api-index.md`.

### `raster-vision`

Role: Routes Raster Vision geospatial computer vision tasks involving rastervision CLI pipelines, GeoTIFF/GeoJSON data configs, PyTorch chip classification, semantic segmentation, object detection, model bundles, AWS runners, Docker, and S3/GDAL filesystems.
Read when: The request names `raster-vision` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cloud and filesystems, data and models, pipeline cli, and pytorch workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `raster-vision/SKILL.md`, `raster-vision/sub-skills/cloud-and-filesystems/`, `raster-vision/sub-skills/data-and-models/`, `raster-vision/sub-skills/pipeline-cli/`, `raster-vision/sub-skills/pytorch-workflows/`, `raster-vision/references/installation-and-package-map.md`.

### `robosat`

Role: Guides RoboSat aerial and satellite imagery segmentation workflows with Slippy Map data preparation, U-Net model lifecycle, feature post-processing, CLI usage, configs, and legacy environment troubleshooting.
Read when: The request names `robosat` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, feature postprocessing, and model lifecycle.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `robosat/SKILL.md`, `robosat/sub-skills/data-preparation/`, `robosat/sub-skills/feature-postprocessing/`, `robosat/sub-skills/model-lifecycle/`, `robosat/references/cli-reference.md`, `robosat/references/configuration.md`.

### `scientific-agent-skills`

Role: Maintains the Scientific Agent Skills repository: adding or updating Agent Skills, validating SKILL.md frontmatter and repo tests, planning isolated skill suites, running or triaging security scans, and keeping catalog/release evidence aligned. Use for K-Dense-AI/scientific-agent-skills checkout tasks, skills-ref validate, tests/_meta, tests/run_all.py, scan_pr_skills.py, scan_skills.py, metadata.version, allowed-tools, openclaw/hermes metadata, docs/skills.md, and scanner findings.
Read when: The request names `scientific-agent-skills` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: security scanning, skill authoring, and validation testing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scientific-agent-skills/SKILL.md`, `scientific-agent-skills/sub-skills/security-scanning/`, `scientific-agent-skills/sub-skills/skill-authoring/`, `scientific-agent-skills/sub-skills/validation-testing/`, `scientific-agent-skills/references/repo-overview.md`, `scientific-agent-skills/references/repo-provenance.md`.

### `segment-geospatial`

Role: Guides segment-geospatial/SamGeo workflows for geospatial SAM segmentation, SAM2/SAM3 model variants, REST API serving, raster/vector IO, and optional text or caption model integrations.
Read when: The request names `segment-geospatial` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api server, core segmentation, geospatial utilities, samgeo3 workflows, and specialized models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `segment-geospatial/SKILL.md`, `segment-geospatial/sub-skills/api-server/`, `segment-geospatial/sub-skills/core-segmentation/`, `segment-geospatial/sub-skills/geospatial-utilities/`, `segment-geospatial/sub-skills/samgeo3-workflows/`, `segment-geospatial/sub-skills/specialized-models/`, `segment-geospatial/references/installation-and-dependencies.md`.

### `snntorch`

Role: Use snnTorch to build spiking neuron models, encode data into spikes, train with surrogate gradients, plot spike tensors, export/import NIR graphs, and maintain legacy spikevision workflows.
Read when: The request names `snntorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core neurons, encoding training, nir interoperability, plotting, and spikevision.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `snntorch/SKILL.md`, `snntorch/sub-skills/core-neurons/`, `snntorch/sub-skills/encoding-training/`, `snntorch/sub-skills/nir-interoperability/`, `snntorch/sub-skills/plotting/`, `snntorch/sub-skills/spikevision/`, `snntorch/references/install-and-import.md`.

### `spikingjelly`

Role: Operate the SpikingJelly package for SNN modeling, datasets, ANN-to-SNN conversion, backend performance, training scale-out, and deployment exchange.
Read when: The request names `spikingjelly` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ann2snn, core snn, datasets, deployment exchange, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `spikingjelly/SKILL.md`, `spikingjelly/sub-skills/ann2snn/`, `spikingjelly/sub-skills/core-snn/`, `spikingjelly/sub-skills/datasets/`, `spikingjelly/sub-skills/deployment-exchange/`, `spikingjelly/sub-skills/performance-and-analysis/`, `spikingjelly/references/package-overview.md`.

### `sunpy`

Role: Use SunPy for solar-physics data access, time and coordinate transformations, Map/WCS image analysis, file I/O, TimeSeries, visualization, and solar-physics calculations.
Read when: The request names `sunpy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: coordinates and time, data access and io, maps and visualization, and timeseries and solar physics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sunpy/SKILL.md`, `sunpy/sub-skills/coordinates-and-time/`, `sunpy/sub-skills/data-access-and-io/`, `sunpy/sub-skills/maps-and-visualization/`, `sunpy/sub-skills/timeseries-and-solar-physics/`, `sunpy/references/compatibility.md`.

### `tensorflow-quantum`

Role: Guide TensorFlow Quantum workflows for circuit tensors, Keras quantum layers, differentiators, datasets, and tutorial recipes.
Read when: The request names `tensorflow-quantum` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and tutorials, differentiation and optimizers, keras quantum layers, and tensor ops and execution.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-quantum/SKILL.md`, `tensorflow-quantum/sub-skills/datasets-and-tutorials/`, `tensorflow-quantum/sub-skills/differentiation-and-optimizers/`, `tensorflow-quantum/sub-skills/keras-quantum-layers/`, `tensorflow-quantum/sub-skills/tensor-ops-and-execution/`, `tensorflow-quantum/references/api-overview.md`.

### `torchgeo`

Role: Use for TorchGeo geospatial deep learning work: datasets, samplers, data modules, transforms, pre-trained models, Lightning tasks, and contribution/testing workflows.
Read when: The request names `torchgeo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: contribution and testing, datamodules and tasks, datasets and samplers, and models and transforms.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `torchgeo/SKILL.md`, `torchgeo/sub-skills/contribution-and-testing/`, `torchgeo/sub-skills/datamodules-and-tasks/`, `torchgeo/sub-skills/datasets-and-samplers/`, `torchgeo/sub-skills/models-and-transforms/`, `torchgeo/references/backend-verification-plan.md`.

<!-- DISCO_SCENARIO:scientific-computing-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
