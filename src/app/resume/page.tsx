import {TopNavMenu} from "@/components/navbar/NavigationMenu";
import PDFViewer from "@/components/pdf/PDFViewer";
import 'core-js/full/promise/with-resolvers.js';
import { polyfillPromiseWithResolvers } from '@/lib/PromiseWithResolvers';

polyfillPromiseWithResolvers();

export default function Resume() {

    return (
        <>
            <TopNavMenu/>
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-10">
                <p className="max-w-2xl italic">This is a general version of my CV. I tailor my applications for each
                    role to highlight the most relevant experience.</p>
                <PDFViewer fileArg="./cv.pdf"/>
            </div>
        </>
    )
}