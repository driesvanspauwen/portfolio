'use client'

import { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const maxWidth = 800;

type PDFFile = string | File | null;

export default function PDFViewer({ fileArg }: { fileArg: PDFFile }): JSX.Element {
    const [file, setFile] = useState<PDFFile>(fileArg);
    const [numPages, setNumPages] = useState<number>();
    const [containerWidth, setContainerWidth] = useState<number>(0);

    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            // Account for padding on mobile
            setContainerWidth(width > 768 ? Math.min(width * 0.9, maxWidth) : width - 32);
        };

        // Set initial width
        updateWidth();

        // Update width on resize
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { files } = event.target;
        const nextFile = files?.[0];
        if (nextFile) setFile(nextFile);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <div className="w-full px-4 md:px-8">
            <div className="mx-auto max-w-screen-md">
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={options}
                    className="flex flex-col items-center"
                >
                    {Array.from(new Array(numPages), (_el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={containerWidth}
                            className="my-4 shadow-md shadow-black/50"
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}