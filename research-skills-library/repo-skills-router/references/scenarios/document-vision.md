# Document Vision

## When To Read

Requests in the Document Vision family of the Computer Vision area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on document vision.

## Repo Skill Options

<!-- DISCO_SCENARIO:document-vision:START -->
### `adelai-det`

Role: Routes AdelaiDet users through legacy-compatible setup, model config selection, training/evaluation, demos, text spotting, dataset preparation, and export/conversion workflows.
Read when: The request names `adelai-det` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data prep, demo visualize, export convert, setup build, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `adelai-det/SKILL.md`, `adelai-det/sub-skills/data-prep/`, `adelai-det/sub-skills/demo-visualize/`, `adelai-det/sub-skills/export-convert/`, `adelai-det/sub-skills/setup-build/`, `adelai-det/sub-skills/text-spotting/`, `adelai-det/references/api-reference.md`.

### `doctr`

Role: Use python-doctr (docTR) for OCR/KIE inference, document IO/export, model customization, datasets/training/evaluation, CLI helpers, deployment, and troubleshooting.
Read when: The request names `doctr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and scripts, core ocr and kie, datasets training and evaluation, deployment and contrib, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `doctr/SKILL.md`, `doctr/sub-skills/cli-and-scripts/`, `doctr/sub-skills/core-ocr-and-kie/`, `doctr/sub-skills/datasets-training-and-evaluation/`, `doctr/sub-skills/deployment-and-contrib/`, `doctr/sub-skills/document-io-and-exports/`, `doctr/references/package-overview.md`.

### `donut`

Role: Use Donut for OCR-free document understanding, checkpoint inference, fine-tuning, evaluation, and SynthDoG synthetic document generation.
Read when: The request names `donut` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference, synthdog, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `donut/SKILL.md`, `donut/sub-skills/inference/`, `donut/sub-skills/synthdog/`, `donut/sub-skills/training/`, `donut/references/api-reference.md`, `donut/references/repo-provenance.md`.

### `easy12306`

Role: Routes easy12306 12306 captcha recognition tasks across pretrained inference, data preparation, text-model training, and image-model training workflows.
Read when: The request names `easy12306` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, image modeling, inference, and text modeling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `easy12306/SKILL.md`, `easy12306/sub-skills/data-preparation/`, `easy12306/sub-skills/image-modeling/`, `easy12306/sub-skills/inference/`, `easy12306/sub-skills/text-modeling/`, `easy12306/references/label-vocabulary.md`.

### `easyocr`

Role: Use EasyOCR to detect and recognize text in images, configure model and language selection, load custom recognition bundles, and troubleshoot DBNet setup.
Read when: The request names `easyocr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom models, dbnet, and inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `easyocr/SKILL.md`, `easyocr/sub-skills/custom-models/`, `easyocr/sub-skills/dbnet/`, `easyocr/sub-skills/inference/`, `easyocr/references/api-reference.md`, `easyocr/references/cli-reference.md`.

### `latex-ocr`

Role: Guides LaTeX-OCR pix2tex image-to-LaTeX OCR, CLI, Python API, GUI, service API, dataset preparation, training, and troubleshooting workflows.
Read when: The request names `latex-ocr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, interactive apps and api, ocr inference, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `latex-ocr/SKILL.md`, `latex-ocr/sub-skills/data-preparation/`, `latex-ocr/sub-skills/interactive-apps-and-api/`, `latex-ocr/sub-skills/ocr-inference/`, `latex-ocr/sub-skills/training-and-evaluation/`, `latex-ocr/references/repo-provenance.md`.

### `layout-parser`

Role: Routes LayoutParser workflows for document layout objects, document I/O, visualization, OCR, and layout-detection model wrappers.
Read when: The request names `layout-parser` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: layout io, layout models, layout objects, ocr, and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `layout-parser/SKILL.md`, `layout-parser/sub-skills/layout-io/`, `layout-parser/sub-skills/layout-models/`, `layout-parser/sub-skills/layout-objects/`, `layout-parser/sub-skills/ocr/`, `layout-parser/sub-skills/visualization/`, `layout-parser/references/api-reference.md`.

### `mmocr`

Role: Use MMOCR for OCR inference, dataset preparation, config-driven training/evaluation, model components, registries, and OpenMMLab OCR troubleshooting.
Read when: The request names `mmocr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model api components, ocr inference, and training evaluation configs.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmocr/SKILL.md`, `mmocr/sub-skills/data-preparation/`, `mmocr/sub-skills/model-api-components/`, `mmocr/sub-skills/ocr-inference/`, `mmocr/sub-skills/training-evaluation-configs/`, `mmocr/references/package-overview.md`.

### `paddlecv`

Role: Use for PaddlePaddle models repo PaddleCV and ppcv inference, task-name pipelines, model catalog checks, and custom operator graph workflows.
Read when: The request names `paddlecv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom ops, single model inference, and system pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlecv/SKILL.md`, `paddlecv/sub-skills/custom-ops/`, `paddlecv/sub-skills/single-model-inference/`, `paddlecv/sub-skills/system-pipelines/`, `paddlecv/references/api-reference.md`, `paddlecv/references/repo-provenance.md`.

### `paddleocr`

Role: Routes PaddleOCR users to local OCR, structured document parsing, hosted API, and training/deployment workflows.
Read when: The request names `paddleocr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cloud api and integrations, document parsing and conversion, local ocr pipelines, and training export and deployment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddleocr/SKILL.md`, `paddleocr/sub-skills/cloud-api-and-integrations/`, `paddleocr/sub-skills/document-parsing-and-conversion/`, `paddleocr/sub-skills/local-ocr-pipelines/`, `paddleocr/sub-skills/training-export-and-deployment/`, `paddleocr/references/installation-and-backends.md`.

### `paddlex`

Role: Operate PaddleX 3.7.2 for low-code AI pipelines, module custom development, deployment, installation, and troubleshooting.
Read when: The request names `paddlex` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, modules, and pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlex/SKILL.md`, `paddlex/sub-skills/deployment/`, `paddlex/sub-skills/modules/`, `paddlex/sub-skills/pipelines/`, `paddlex/references/deployment-overview.md`, `paddlex/references/installation.md`.

### `presidio`

Role: Use Presidio for PII and PHI detection, anonymization, structured de-identification, image/DICOM redaction, and CLI scans.
Read when: The request names `presidio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analyze text, anonymize text, cli scans, image redaction, and structured data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `presidio/SKILL.md`, `presidio/sub-skills/analyze-text/`, `presidio/sub-skills/anonymize-text/`, `presidio/sub-skills/cli-scans/`, `presidio/sub-skills/image-redaction/`, `presidio/sub-skills/structured-data/`, `presidio/references/install-and-models.md`.

### `pymupdf`

Role: Use PyMuPDF for document opening, text/table/RAG extraction, rendering, image and graphics work, PDF editing, annotations, forms, CLI checks, and maintenance triage.
Read when: The request names `pymupdf` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and maintenance, document core, pdf editing annotations forms, rendering images and graphics, and text tables and rag.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pymupdf/SKILL.md`, `pymupdf/sub-skills/cli-and-maintenance/`, `pymupdf/sub-skills/document-core/`, `pymupdf/sub-skills/pdf-editing-annotations-forms/`, `pymupdf/sub-skills/rendering-images-and-graphics/`, `pymupdf/sub-skills/text-tables-and-rag/`, `pymupdf/references/optional-dependencies.md`.

### `sparrow`

Role: Route Sparrow document-intelligence workflows across structured extraction, LLM API/CLI operation, OCR, agents, UI deployment, and backend troubleshooting.
Read when: The request names `sparrow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent workflows, api engine and cli, document extraction, ocr service, and ui and deployment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sparrow/SKILL.md`, `sparrow/sub-skills/agent-workflows/`, `sparrow/sub-skills/api-engine-and-cli/`, `sparrow/sub-skills/document-extraction/`, `sparrow/sub-skills/ocr-service/`, `sparrow/sub-skills/ui-and-deployment/`, `sparrow/references/installation-and-backends.md`.

### `video-subtitle-extractor`

Role: Use Video-subtitle-extractor (VSE) to extract hard-coded video subtitles into SRT/TXT, configure OCR/backends, batch GUI runs, clean subtitle output, and synchronize subtitle timelines.
Read when: The request names `video-subtitle-extractor` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: extraction workflows, gui batch operations, ocr backends, postprocessing config, and subtitle sync.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `video-subtitle-extractor/SKILL.md`, `video-subtitle-extractor/sub-skills/extraction-workflows/`, `video-subtitle-extractor/sub-skills/gui-batch-operations/`, `video-subtitle-extractor/sub-skills/ocr-backends/`, `video-subtitle-extractor/sub-skills/postprocessing-config/`, `video-subtitle-extractor/sub-skills/subtitle-sync/`, `video-subtitle-extractor/references/development-notes.md`.

### `x-anylabeling`

Role: Use X-AnyLabeling for AI-assisted visual and multimodal annotation, XLABEL conversion, model configuration, training, packaging, and repository workflows.
Read when: The request names `x-anylabeling` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: annotation ui, auto labeling models, conversion cli, and developer workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `x-anylabeling/SKILL.md`, `x-anylabeling/sub-skills/annotation-ui/`, `x-anylabeling/sub-skills/auto-labeling-models/`, `x-anylabeling/sub-skills/conversion-cli/`, `x-anylabeling/sub-skills/developer-workflows/`, `x-anylabeling/references/install-and-runtime.md`.

<!-- DISCO_SCENARIO:document-vision:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
