import SvgLogo from "./SvgLogo";

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function PythonLogo({width, height, className}: LogoProps) {
    return (
        <SvgLogo
            width={width}
            height={height}
            className={className}
            viewBox="0 0 83.371 101.001"
            href="https://www.python.org"
        >
            <g transform="scale(0.80) translate(2, 0)">
                <defs>
                    <linearGradient id="python-blue-gradient"
                                    gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)"
                                    x1="26.648937" y1="20.603781" x2="135.66525" y2="114.39767">
                        <stop style={{stopColor: "#5a9fd4", stopOpacity: 1}} offset="0"/>
                        <stop style={{stopColor: "#306998", stopOpacity: 1}} offset="1"/>
                    </linearGradient>
                    <linearGradient id="python-yellow-gradient"
                                    gradientTransform="matrix(0.562541,0,0,0.567972,-14.99112,-11.702371)"
                                    x1="150.96111" y1="192.35176" x2="112.03144" y2="137.27299">
                        <stop style={{stopColor: "#ffd43b", stopOpacity: 1}} offset="0"/>
                        <stop style={{stopColor: "#ffe873", stopOpacity: 1}} offset="1"/>
                    </linearGradient>
                    <radialGradient id="python-shadow-gradient"
                                    gradientTransform="matrix(1.7490565e-8,-0.23994696,1.054668,3.7915457e-7,-83.7008,142.46201)"
                                    cx="61.518883" cy="132.28575" fx="61.518883" fy="132.28575" r="29.036913">
                        <stop style={{stopColor: "#b8b8b8", stopOpacity: 0.498}} offset="0"/>
                        <stop style={{stopColor: "#7f7f7f", stopOpacity: 0}} offset="1"/>
                    </radialGradient>
                </defs>

                {/* Blue part (Python head) */}
                <path
                    style={{fill: "url(#python-blue-gradient)"}}
                    d="M 54.918785,9.1927421e-4 C 50.335132,0.02221727 45.957846,0.41313697 42.106285,1.0946693 30.760069,3.0991731 28.700036,7.2947714 28.700035,15.032169 v 10.21875 h 26.8125 v 3.40625 h -26.8125 -10.0625 c -7.792459,0 -14.6157588,4.683717 -16.7499998,13.59375 -2.46181998,10.212966 -2.57101508,16.586023 0,27.25 1.9059283,7.937852 6.4575432,13.593748 14.2499998,13.59375 h 9.21875 v -12.25 c 0,-8.849902 7.657144,-16.656248 16.75,-16.65625 h 26.78125 c 7.454951,0 13.406253,-6.138164 13.40625,-13.625 v -25.53125 c 0,-7.2663386 -6.12998,-12.7247771 -13.40625,-13.9374997 C 64.281548,0.32794397 59.502438,-0.02037903 54.918785,9.1927421e-4 Z m -14.5,8.21875012579 c 2.769547,0 5.03125,2.2986456 5.03125,5.1249996 -2e-6,2.816336 -2.261703,5.09375 -5.03125,5.09375 -2.779476,-1e-6 -5.03125,-2.277415 -5.03125,-5.09375 -10e-7,-2.826353 2.251774,-5.1249996 5.03125,-5.1249996 Z"
                />

                {/* Yellow part (Python tail) */}
                <path
                    style={{fill: "url(#python-yellow-gradient)"}}
                    d="m 85.637535,28.657169 v 11.90625 c 0,9.230755 -7.825895,16.999999 -16.75,17 h -26.78125 c -7.335833,0 -13.406249,6.278483 -13.40625,13.625 v 25.531247 c 0,7.266344 6.318588,11.540324 13.40625,13.625004 8.487331,2.49561 16.626237,2.94663 26.78125,0 6.750155,-1.95439 13.406253,-5.88761 13.40625,-13.625004 V 86.500919 h -26.78125 v -3.40625 h 26.78125 13.406254 c 7.792461,0 10.696251,-5.435408 13.406241,-13.59375 2.79933,-8.398886 2.68022,-16.475776 0,-27.25 -1.92578,-7.757441 -5.60387,-13.59375 -13.406241,-13.59375 z m -15.0625,64.65625 c 2.779478,3e-6 5.03125,2.277417 5.03125,5.093747 -2e-6,2.826354 -2.251775,5.125004 -5.03125,5.125004 -2.76955,0 -5.03125,-2.29865 -5.03125,-5.125004 2e-6,-2.81633 2.261697,-5.093747 5.03125,-5.093747 z"
                />

                {/* Shadow at the bottom */}
                <ellipse
                    style={{opacity: 0.44, fill: "url(#python-shadow-gradient)"}}
                    cx="55.816761"
                    cy="127.70079"
                    rx="35.930977"
                    ry="6.9673119"
                />
            </g>
        </SvgLogo>
    );
}