'use client';

import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 800;

type PDFFile = string | File | null;

export default function PDFViewer( { fileArg }: { fileArg: PDFFile } ): JSX.Element {
    const [file, setFile] = useState<PDFFile>(fileArg);
    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { files } = event.target;
        const nextFile = files?.[0];
        if (nextFile) setFile(nextFile);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center my-2.5 py-2.5 px-0 w-full max-w-screen-md">
                <div className="w-full max-w-[calc(100%-2em)] my-4" ref={setContainerRef}>
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options} className="flex flex-col items-center">
                        {Array.from(new Array(numPages), (_el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                                className="my-4 shadow-md shadow-black/50"
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}