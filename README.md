# Welcome to the APEx documentation portal

This GitHub repository serves as the central hub for managing the APEx documentation portal. 
The content generation is facilitated by [Quarto](https://quarto.org/), an open-source scientific and technical publishing system.

To preview the content and any changes you make, it's crucial to install the Quarto CLI beforehand. 
Once installed, you can preview the content by running the following command in your terminal:

```bash
quarto preview .
```

This command will initiate a local preview of the documentation portal, allowing you to review your changes before committing them.

## Deliverables

Since the content of this repository is also included in a deliverable, we can use the Quarto framework to generate the 
deliverable content. To preview the deliverable, execute the following command:

```bash
quarto preview deliverable/<name>.md
```

To generate the corresponding Word document, use the following command:

```bash
quarto render deliverable/<name>.md --to docx 
```