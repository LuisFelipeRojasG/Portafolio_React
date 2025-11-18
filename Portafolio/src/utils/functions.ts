const handleDownloadCV = (): void => {
    const pdfPath = '/document/CV-Luis_Felipe_Rojas_Frontend_Developer.pdf'
        window.open(pdfPath, '_blank')
}

export { handleDownloadCV }