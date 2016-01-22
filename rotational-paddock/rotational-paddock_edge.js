/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rotational-coop',
                            type: 'image',
                            tag: 'img',
                            rect: ['0', '0px', '800px', '600px', 'auto', 'auto'],
                            alt: 'Rotational paddocks',
                            fill: ["rgba(0,0,0,0)",im+"rotational-coop.svg",'0px','0px']
                        },
                        {
                            id: 'paddock-a-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['-66px', '-20px', '480px', '640px', 'auto', 'auto'],
                            alt: 'Rotational paddock',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"paddock-a.svg",'0px','0px']
                        },
                        {
                            id: 'paddock-b-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['-30px', '156px', '480px', '640px', 'auto', 'auto'],
                            alt: 'Rotational paddock',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"paddock-b.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'paddock-b-4',
                            type: 'image',
                            rect: ['350px', '155px', '480px', '640px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"paddock-b.svg",'0px','0px'],
                            transform: [[],[],[],['1','-1']]
                        },
                        {
                            id: 'paddock-b2',
                            type: 'image',
                            rect: ['-30px', '-195px', '480px', '640px', 'auto', 'auto'],
                            opacity: '0.25',
                            fill: ["rgba(0,0,0,0)",im+"paddock-b.svg",'0px','0px'],
                            transform: [[],[],[],['-1']]
                        },
                        {
                            id: 'paddock-b3',
                            type: 'image',
                            rect: ['350px', '-195px', '480px', '640px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(0,0,0,0)",im+"paddock-b.svg",'0px','0px']
                        },
                        {
                            id: 'paddock-a',
                            type: 'image',
                            rect: ['387px', '-20px', '480px', '640px', 'auto', 'auto'],
                            opacity: '0.75022230691057',
                            fill: ["rgba(0,0,0,0)",im+"paddock-a.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'top-chicken',
                            type: 'image',
                            tag: 'img',
                            rect: ['317px', '432px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['180'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken2',
                            type: 'image',
                            tag: 'img',
                            rect: ['275px', '502px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken3',
                            type: 'image',
                            tag: 'img',
                            rect: ['257px', '473px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken4',
                            type: 'image',
                            tag: 'img',
                            rect: ['270px', '408px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['90'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken5',
                            type: 'image',
                            tag: 'img',
                            rect: ['353px', '508px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken6',
                            type: 'image',
                            tag: 'img',
                            rect: ['52px', '518px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['90'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken2-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['280px', '291px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['161'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken2-2',
                            type: 'image',
                            tag: 'img',
                            rect: ['207px', '331px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['120'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken2-3',
                            type: 'image',
                            tag: 'img',
                            rect: ['257px', '331px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['114'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken2-4',
                            type: 'image',
                            tag: 'img',
                            rect: ['261px', '262px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['175'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken2-5',
                            type: 'image',
                            tag: 'img',
                            rect: ['247px', '295px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['156'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken2-6',
                            type: 'image',
                            tag: 'img',
                            rect: ['128px', '342px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['115'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken3-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['357px', '180px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-162'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken3-2',
                            type: 'image',
                            tag: 'img',
                            rect: ['293px', '169px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['174'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken3-3',
                            type: 'image',
                            tag: 'img',
                            rect: ['294px', '169px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['167'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken3-4',
                            type: 'image',
                            tag: 'img',
                            rect: ['315px', '158px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['185'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken3-5',
                            type: 'image',
                            tag: 'img',
                            rect: ['339px', '156px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-193'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken3-6',
                            type: 'image',
                            tag: 'img',
                            rect: ['247px', '157px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['170'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken4-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['391px', '160px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-135'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken4-2',
                            type: 'image',
                            tag: 'img',
                            rect: ['411px', '162px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['239'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken4-3',
                            type: 'image',
                            tag: 'img',
                            rect: ['430px', '147px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-147'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken4-4',
                            type: 'image',
                            tag: 'img',
                            rect: ['450px', '172px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['237'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken4-5',
                            type: 'image',
                            tag: 'img',
                            rect: ['502px', '150px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-80'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken4-6',
                            type: 'image',
                            tag: 'img',
                            rect: ['425px', '198px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-85'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken5-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['513px', '192px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-67'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken5-2',
                            type: 'image',
                            tag: 'img',
                            rect: ['486px', '246px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-62'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken5-3',
                            type: 'image',
                            tag: 'img',
                            rect: ['502px', '281px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-34'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken5-4',
                            type: 'image',
                            tag: 'img',
                            rect: ['491px', '305px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'C\'est un poulet.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-47'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken5-5',
                            type: 'image',
                            tag: 'img',
                            rect: ['502px', '210px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-70'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken5-6',
                            type: 'image',
                            tag: 'img',
                            rect: ['486px', '328px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-63'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken6-1',
                            type: 'image',
                            tag: 'img',
                            rect: ['486px', '374px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-9'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken6-2',
                            type: 'image',
                            tag: 'img',
                            rect: ['417px', '382px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['20'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken6-3',
                            type: 'image',
                            tag: 'img',
                            rect: ['428px', '359px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['42'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken6-4',
                            type: 'image',
                            tag: 'img',
                            rect: ['397px', '363px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is a chicken, too.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['87'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken6-5',
                            type: 'image',
                            tag: 'img',
                            rect: ['444px', '385px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['2'],[],['0.4','0.4']]
                        },
                        {
                            id: 'top-chicken6-6',
                            type: 'image',
                            tag: 'img',
                            rect: ['472px', '387px', '50px', '50px', 'auto', 'auto'],
                            autoOrient: true,
                            alt: 'This is also a chicken.',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"top-chicken.svg",'0px','0px'],
                            transform: [[],['-20'],[],['0.4','0.4']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 180000,
                    autoPlay: true,
                    data: [
                        [
                            "eid89",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken3-2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid88",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken3-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken3-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid87",
                            "location",
                            60000,
                            30000,
                            "linear",
                            "${top-chicken3-1}",
                            [[382, 204.6, 0, 0, 0, 0,0],[377.85, 178.03, 51.57, -7.78, 29.16, -4.4,29.59],[389.19, 35.94, -25.62, -39.62, -13.19, -20.39,174.9],[324.43, 60.9, 28.07, 40.92, 71.38, 104.06,266.85],[394.54, 237.65, 70.36, 65.21, 59.9, 55.52,457.55],[415.98, 183.85, 0, 0, 0, 0,528.47]]
                        ],
                        [
                            "eid229",
                            "opacity",
                            0,
                            120000,
                            "linear",
                            "${paddock-b-4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid230",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${paddock-b-4}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid231",
                            "opacity",
                            150000,
                            30000,
                            "linear",
                            "${paddock-b-4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${top-chicken6}",
                            [[76.83, 543.16, 0, 0, 0, 0,0],[33.92, 565.91, 17.2, -39.86, 23.46, -54.34,55.92],[57.39, 512.48, 39.53, -68, 39.03, -67.14,114.34],[218.38, 571.18, 20.81, -31.63, 45.72, -69.5,292.07],[362.42, 517.21, -11.23, -43.21, -15.48, -59.57,448.93],[376.79, 399.96, -88.04, -276.31, -23.9, -75.01,567.7],[153.47, 365.61, 0, 0, 0, 0,813.36]]
                        ],
                        [
                            "eid142",
                            "location",
                            90000,
                            30000,
                            "linear",
                            "${top-chicken4-3}",
                            [[454.83, 171.83, 0, 0, 0, 0,0],[449.59, 135.3, 11.29, 21.05, 23.07, 42.99,43.16],[495.87, 179.7, 17.63, -3.63, 38.39, -7.91,108.9],[506.55, 152.64, 38.26, -40.72, 27.53, -29.3,138.58],[544.68, 125.22, -6.52, -69.32, -1.45, -15.41,185.97],[488.04, 94.28, 0.95, 36.87, 0.94, 36.44,258.27],[541.32, 157.84, 18.16, -6.75, 51.89, -19.3,345.38],[571.41, 78.47, -69.45, -36.51, -21.14, -11.11,431.6],[464.53, 74.37, -3.32, 44.37, -2.43, 32.44,541.28],[517.89, 130.3, 6.26, 36.92, 9.83, 57.98,620.11],[463.95, 115.82, 8.71, 85.06, 3.93, 38.36,680.34],[458.32, 249.9, 52.18, 146.01, 36.54, 102.27,815.31],[527.01, 306.34, 0, 0, 0, 0,908.22]]
                        ],
                        [
                            "eid124",
                            "location",
                            90000,
                            30000,
                            "linear",
                            "${top-chicken4-1}",
                            [[416.14, 185, 0, 0, 0, 0,0],[419.17, 25.93, 102.1, -26.32, 47.09, -12.14,160.88],[761.14, 42.76, 90.19, 167.01, 22.91, 42.43,504.56],[465.1, 231.91, -18.09, 79.53, -16.87, 74.15,867.23],[538, 217.14, 0, 0, 0, 0,950.92]]
                        ],
                        [
                            "eid162",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken5-6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid200",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken5-6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken5-3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid177",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid220",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken5-3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "location",
                            90000,
                            30000,
                            "linear",
                            "${top-chicken4-5}",
                            [[527, 175, 0, 0, 0, 0,0],[653.5, 86.5, 418.26, -93.21, 48.21, -10.74,154.61],[606.74, 38.61, -53.22, 43.33, -56.26, 45.8,327.62],[471.66, 49.19, -22.5, 50.14, -33.76, 75.23,466.66],[525, 108.27, 8.89, 38.84, 15.52, 67.81,549.06],[456.68, 225.59, 9.71, 138.22, 2.73, 38.83,685.57],[526.58, 234.58, 0, 0, 0, 0,771.21]]
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${top-chicken2}",
                            [[300, 527, 0, 0, 0, 0,0],[338.53, 568.03, -78.65, 34.47, -23.68, 10.38,57.78],[280.07, 562.13, -26.7, -41.41, -38.11, -59.1,122.69],[199.38, 558.07, -15.88, -44.13, -20.61, -57.27,206.98],[384.6, 462.31, 119.41, -551.02, 30.66, -141.48,420.55],[232.68, 356, 0, 0, 0, 0,672.99]]
                        ],
                        [
                            "eid171",
                            "location",
                            120000,
                            30000,
                            "linear",
                            "${top-chicken5-5}",
                            [[526.82, 234.82, 0, 0, 0, 0,0],[565.72, 222.47, -100.91, 428.56, -5.97, 25.36,42.84],[661.67, 307.7, 66.12, -32.87, 12.75, -6.34,224.37],[653.01, 208.62, -50.35, 29.21, -69.72, 40.43,338.14],[644.05, 300.81, -39.4, -23.13, -88.95, -52.22,442.95],[609.88, 227.51, -39.68, 19.08, -57.91, 27.84,528.65],[637.76, 277.84, -45.09, 51.07, -44.7, 50.63,592.14],[508.5, 246.78, -91.27, 72.47, -69.38, 55.09,729.31],[453.64, 364.01, -10.47, 80.17, -35.46, 271.51,864.23],[469.01, 410, 0, 0, 0, 0,914.08]]
                        ],
                        [
                            "eid147",
                            "location",
                            90000,
                            30000,
                            "linear",
                            "${top-chicken4-4}",
                            [[475.24, 197.24, 0, 0, 0, 0,0],[490.97, 150.02, 5.33, 17.47, 11.24, 36.87,53.21],[519.42, 163.93, 29.12, -32.39, 20.46, -22.76,87.67],[538.26, 97.34, -71.69, -58.82, -32, -26.25,159.66],[506.36, 173.24, -0.63, 49.52, -2.03, 160.43,259.51],[446.98, 163.91, 105.74, 365.98, 24.42, 84.53,331.63],[535.57, 54.89, 65.46, 50.21, 66.44, 50.96,536.8],[515.78, 137.56, -136.08, 36.97, -138.91, 37.74,640.87],[450.51, 225.3, -12.42, 118.01, -12.07, 114.68,757.85],[456.6, 320.63, 4.11, 35.37, 5.42, 46.67,853.62],[515.6, 329.6, 0, 0, 0, 0,915.11]]
                        ],
                        [
                            "eid144",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken4-4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid143",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken4-4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid51",
                            "location",
                            30000,
                            30000,
                            "linear",
                            "${top-chicken2-2}",
                            [[232, 356, 0, 0, 0, 0,0],[209.09, 365.48, -100.49, 101.87, -6.85, 6.94,24.83],[118.97, 191.75, 128.94, 43.44, 298.9, 100.7,283.74],[101.94, 385.26, 127.53, -10.45, 66.51, -5.45,487.52],[347.27, 250.31, 62.75, -70.09, 148.02, -165.35,770.39],[317.66, 193.66, 0, 0, 0, 0,841.87]]
                        ],
                        [
                            "eid72",
                            "location",
                            30000,
                            30000,
                            "linear",
                            "${top-chicken2-5}",
                            [[272.14, 320.14, 0, 0, 0, 0,0],[253.48, 304.07, 20.57, -31.2, 16.94, -25.69,27.37],[263.02, 223.36, -13.43, -31.67, -36.33, -85.65,110.91],[165.15, 212.85, -44.82, 48.13, -23.06, 24.76,211.51],[187.41, 287.59, 87.62, -13.59, 95.92, -14.88,303.96],[252.31, 325.41, 35.52, -24.7, 111.58, -77.6,390.2],[333.95, 279.28, 9.7, -84.1, 13.22, -114.59,489.65],[378, 242.33, 114.3, -110.43, 18.73, -18.1,550.3],[364.08, 180.67, 0, 0, 0, 0,627.8]]
                        ],
                        [
                            "eid76",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken2-1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid75",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken2-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken2-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid246",
                            "opacity",
                            0,
                            60000,
                            "linear",
                            "${paddock-b3}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid247",
                            "opacity",
                            60000,
                            30000,
                            "linear",
                            "${paddock-b3}",
                            '0',
                            '0.000000'
                        ],
                        [
                            "eid243",
                            "opacity",
                            90000,
                            30000,
                            "linear",
                            "${paddock-b3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid244",
                            "opacity",
                            120000,
                            60000,
                            "linear",
                            "${paddock-b3}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid202",
                            "location",
                            150000,
                            30000,
                            "linear",
                            "${top-chicken6-6}",
                            [[497, 411.82, 0, 0, 0, 0,0],[539.73, 446.25, -44.62, 13.94, -81.49, 25.45,66.72],[682.19, 534.77, -93.78, 22.82, -68.07, 16.56,240.07],[561.59, 479.78, -98.33, 4.79, -162.28, 7.9,375.83],[432.83, 358.22, -404.18, 40.86, -110.31, 11.15,557.22],[79.93, 515.04, -55.23, 45.39, -172.39, 141.69,947.54],[77, 543, 0, 0, 0, 0,980.11]]
                        ],
                        [
                            "eid104",
                            "rotateZ",
                            60000,
                            0,
                            "linear",
                            "${top-chicken3-3}",
                            '167deg',
                            '167deg'
                        ],
                        [
                            "eid67",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid139",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken4-3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken4-3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken5-4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid184",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid207",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken5-4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid119",
                            "location",
                            60000,
                            30000,
                            "linear",
                            "${top-chicken3-6}",
                            [[271.74, 182, 0, 0, 0, 0,0],[36.24, 63.5, -28.95, -10.8, -357.72, -133.51,264.02],[53.19, 24.51, 154.37, 14.75, 53.57, 5.12,314.38],[384.29, 49.57, -8.65, 8.98, -144.19, 149.66,666.47],[342.3, 38.48, -252.61, 31.39, -59.32, 7.37,710.39],[73.24, 84.23, 89.06, 99.32, 25.87, 28.85,984.79],[323.47, 211.19, 20.05, 6.63, 144.5, 47.82,1266.46],[340.41, 251.5, 178.59, 44.63, 19.3, 4.82,1310.91],[449.68, 222.58, 0, 0, 0, 0,1427.91]]
                        ],
                        [
                            "eid126",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken4-5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid125",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken4-5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${top-chicken3}",
                            [[282, 498, 0, 0, 0, 0,0],[317.35, 524.91, 26.12, -42.14, 18.8, -30.33,47.3],[271.84, 451.42, -7.23, -37.13, -13.91, -71.42,135.8],[379.97, 412.79, 10.15, -267.94, 1.26, -33.24,252.68],[282, 356, 0, 0, 0, 0,391.03]]
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken2-3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid52",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken2-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken2-3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid183",
                            "location",
                            120000,
                            30000,
                            "linear",
                            "${top-chicken5-3}",
                            [[527, 305.59, 0, 0, 0, 0,0],[588.65, 325.18, -31.94, 33.91, -34.1, 36.21,69.12],[503, 314.24, 10.79, -43.95, 12.81, -52.15,161.92],[658.87, 253.66, 159.49, 303.06, 22.85, 43.42,332.84],[549.56, 245.84, -35.01, 2.28, -233.6, 15.24,514.64],[464.84, 283.95, -57.11, 81.41, -47.47, 67.66,609.2],[452.88, 384.29, 0, 0, 0, 0,711.63]]
                        ],
                        [
                            "eid20",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${top-chicken}",
                            [[342.1, 457.29, 0, 0, 0, 0,0],[326.1, 432.73, -10.3, -38.93, -9.49, -35.88,29.56],[235.57, 504.22, -35.18, -187.17, -9.73, -51.78,149.76],[378.08, 466.64, 22.17, -56.83, 38.31, -98.19,315.86],[301.88, 406.68, -10.82, -20.71, -37.4, -71.54,416.09],[356.99, 372.66, -21.97, -107.45, -4.25, -20.81,482.01],[304.91, 316.72, 0, 0, 0, 0,560.87]]
                        ],
                        [
                            "eid79",
                            "location",
                            30000,
                            30000,
                            "linear",
                            "${top-chicken2-1}",
                            [[305, 316, 0, 0, 0, 0,0],[282.41, 298.68, 11.43, -16.42, 16, -22.98,30.79],[286.84, 247.38, 15.33, -15.84, 21.3, -22.02,82.83],[296.18, 357.25, -107.19, 62.87, -20.12, 11.8,194.62],[164.56, 359.66, -15.07, -46.59, -54.83, -169.52,346.02],[113.18, 454.57, 83.61, -59.13, 100.74, -71.25,472.36],[270.33, 345.67, 54.91, -52.04, 158.1, -149.85,663.85],[332.83, 324.45, 51.6, -61.89, 43.14, -51.74,731.39],[348.85, 264.18, 23.61, -47.2, 31.32, -62.62,794.71],[385.92, 243.91, 30.26, -53.99, 14.47, -25.81,837.95],[382.47, 204.71, 0, 0, 0, 0,878.91]]
                        ],
                        [
                            "eid74",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken}",
                            '1',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken}",
                            '1',
                            '0'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken2-5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid68",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken2-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken2-5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid134",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken4-2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid133",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken4-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid168",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken5-5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid167",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken5-5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid219",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken6-3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid218",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken6-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken3-4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid105",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken3-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken3-4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid61",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid116",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken3-6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken3-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken3-6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid92",
                            "location",
                            60000,
                            30000,
                            "linear",
                            "${top-chicken3-2}",
                            [[317.83, 194.16, 0, 0, 0, 0,0],[291.16, 165.22, 57.83, -10.61, 39.35, -7.22,43.69],[353.84, 170.35, 78.17, -26.62, 47.72, -16.25,106.95],[253.61, 61.58, -125.77, 28.03, -74.59, 16.62,266.28],[398.95, 247.3, 80.05, 32.41, 188.69, 76.39,519.36],[436, 186.85, 0, 0, 0, 0,597.74]]
                        ],
                        [
                            "eid47",
                            "location",
                            30000,
                            30000,
                            "linear",
                            "${top-chicken2-6}",
                            [[153, 367, 0, 0, 0, 0,0],[121.5, 387.49, -104.34, 117.5, -37.15, 41.84,37.89],[30.43, 492.16, -8.12, -124.25, -2.11, -32.28,178.5],[49.9, 109.24, 30.63, 3.06, 67.96, 6.79,564.4],[334.88, 250.97, 104.49, -9.81, 166.16, -15.6,884.62],[272.29, 181.79, 0, 0, 0, 0,990.74]]
                        ],
                        [
                            "eid109",
                            "location",
                            60000,
                            30000,
                            "linear",
                            "${top-chicken3-4}",
                            [[339.72, 182.72, 0, 0, 0, 0,0],[217.69, 33.99, 32.98, -7.35, 124.08, -27.66,203.76],[245.24, 138.87, 83.63, 50.73, 92.99, 56.41,315.64],[360.77, 245.65, 67.27, 16.5, 109.48, 26.85,474.2],[457.33, 249.09, 45.75, -21.47, 50.94, -23.91,571.67],[474.8, 198.11, 0, 0, 0, 0,627.19]]
                        ],
                        [
                            "eid111",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken3-5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid110",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken3-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken3-5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid176",
                            "location",
                            120000,
                            30000,
                            "linear",
                            "${top-chicken5-2}",
                            [[511.01, 271.01, 0, 0, 0, 0,0],[574.81, 265.39, 78.32, 17.55, 99.73, 22.35,64.84],[577.74, 241.55, -23, 28.35, -24.78, 30.55,108.24],[671.14, 254.87, 102.47, 32.11, 128.77, 40.36,205.2],[717.67, 310.28, -57.91, 69.57, -28.49, 34.22,284.61],[649.22, 235.35, -66.24, 18.89, -188.21, 53.68,405.1],[629.2, 372.18, -38.58, 31.62, -92.56, 75.85,548.04],[471.58, 329.35, -191.52, 62.8, -50.23, 16.47,712.68],[440.52, 406.48, 0, 0, 0, 0,810.37]]
                        ],
                        [
                            "eid254",
                            "opacity",
                            0,
                            90000,
                            "linear",
                            "${paddock-a}",
                            '0.75022230691057',
                            '0'
                        ],
                        [
                            "eid255",
                            "opacity",
                            90000,
                            30000,
                            "linear",
                            "${paddock-a}",
                            '0',
                            '0.000000'
                        ],
                        [
                            "eid251",
                            "opacity",
                            120000,
                            30000,
                            "linear",
                            "${paddock-a}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid252",
                            "opacity",
                            150000,
                            30000,
                            "linear",
                            "${paddock-a}",
                            '1',
                            '0.75'
                        ],
                        [
                            "eid239",
                            "opacity",
                            0,
                            30000,
                            "linear",
                            "${paddock-b2}",
                            '0.25',
                            '0'
                        ],
                        [
                            "eid240",
                            "opacity",
                            30000,
                            30000,
                            "linear",
                            "${paddock-b2}",
                            '0',
                            '0.000000'
                        ],
                        [
                            "eid236",
                            "opacity",
                            60000,
                            30000,
                            "linear",
                            "${paddock-b2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid237",
                            "opacity",
                            90000,
                            90000,
                            "linear",
                            "${paddock-b2}",
                            '1',
                            '0.25'
                        ],
                        [
                            "eid227",
                            "location",
                            150000,
                            30000,
                            "linear",
                            "${top-chicken6-5}",
                            [[469, 410, 0, 0, 0, 0,0],[609.6, 498.85, 105.31, 16.15, 196.33, 30.11,168.62],[455.16, 555.88, -116.84, -38.27, -45.46, -14.89,344.14],[557.25, 450.6, -38.71, -13.49, -256.82, -89.48,532.38],[514.53, 525.34, -48.41, 25.55, -136.21, 71.89,623.19],[434.29, 345.42, -581.52, 152.99, -78.5, 20.65,825.2],[378, 533, 0, 0, 0, 0,1083.62]]
                        ],
                        [
                            "eid224",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken6-5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid223",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken6-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "location",
                            120000,
                            30000,
                            "linear",
                            "${top-chicken5-1}",
                            [[538, 217, 0, 0, 0, 0,0],[771.75, 130.26, -6.48, 43.85, -23.71, 160.57,263.81],[769.81, 496.53, -31.49, 39.02, -22.62, 28.03,630.28],[720.26, 474.25, -102.85, -35.47, -101.33, -34.95,688.65],[477.05, 359.73, -118.6, -1.38, -125.15, -1.46,958.32],[511.11, 399.05, 0, 0, 0, 0,1029.86]]
                        ],
                        [
                            "eid18",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${top-chicken4}",
                            [[295, 433, 0, 0, 0, 0,0],[269.32, 440.32, -25.3, -90.96, -12.49, -44.92,32.1],[115.28, 495.07, -159.43, 232.27, -34.01, 49.55,204.32],[366.02, 566.71, 254.64, -497.6, 50.69, -99.05,507.12],[285, 285.09, 0, 0, 0, 0,827.72]]
                        ],
                        [
                            "eid214",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken6-2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid213",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken6-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "location",
                            150000,
                            30000,
                            "linear",
                            "${top-chicken6-4}",
                            [[422, 388, 0, 0, 0, 0,0],[409.23, 393.64, -48.06, 17.03, -35.03, 12.41,14],[475.07, 454.96, -22.71, 7.79, -67.12, 23.03,112.66],[450.46, 470.13, -46.85, 61.09, -21.1, 27.51,142.02],[523.64, 512.41, -58.05, 24.55, -149.53, 63.25,252.76],[410.29, 358.49, -113.29, -40.33, -136.94, -48.75,447.81],[338.64, 376.86, -35.73, 43.95, -64.54, 79.38,529.52],[295, 433, 0, 0, 0, 0,600.62]]
                        ],
                        [
                            "eid206",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken6-4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid208",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken6-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            180000,
                            0,
                            "linear",
                            "${top-chicken6-4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken6-6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid198",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken6-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken2-6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid44",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken2-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken2-6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "location",
                            150000,
                            30000,
                            "linear",
                            "${top-chicken6-1}",
                            [[510.86, 399, 0, 0, 0, 0,0],[557.25, 423.37, 238.84, 108.89, 81.49, 37.15,52.43],[762.52, 537.56, -45.48, 151.86, -24.38, 81.39,292.24],[422.5, 571.8, -71.03, -7.2, -58.62, -5.94,641.05],[406.53, 359.92, -61.42, -44.5, -37.31, -27.03,856.65],[378.47, 449.56, -38.1, 86.13, -31.35, 70.86,958.3],[342, 457, 0, 0, 0, 0,1003.32]]
                        ],
                        [
                            "eid217",
                            "location",
                            150000,
                            30000,
                            "linear",
                            "${top-chicken6-2}",
                            [[442, 406.82, 0, 0, 0, 0,0],[453.48, 464.51, -38.93, 76.14, -24.97, 48.84,60.11],[638.88, 534.12, -72.3, 35.24, -173, 84.33,281.01],[447.02, 538.92, -121.63, -7.39, -240.34, -14.6,473.79],[561.34, 463.96, -31.4, -2.8, -82.42, -7.36,626.87],[449.89, 487.4, -91.27, 22.96, -157.37, 39.58,740.9],[396.5, 351.93, -76.23, 20.32, -79.2, 21.11,895.09],[295.71, 496.16, -23.58, 58.02, -59.45, 146.31,1073.36],[300, 527, 0, 0, 0, 0,1106.15]]
                        ],
                        [
                            "eid222",
                            "location",
                            150000,
                            30000,
                            "linear",
                            "${top-chicken6-3}",
                            [[453, 384.01, 0, 0, 0, 0,0],[453.41, 533.62, -23.97, 81.35, -9.48, 32.18,149.68],[423.05, 498.49, 15.88, -49.82, 36.4, -114.19,224.09],[605.18, 488.03, -23.33, -39.08, -47.61, -79.74,413.93],[510.03, 514.6, -95.6, 4.22, -160.34, 7.07,515.23],[451.9, 354.88, -58.68, -4.32, -102.35, -7.53,692.58],[346.1, 367.67, -109.5, 84.39, -66.6, 51.33,800.64],[270.49, 468.01, -9.79, 41.9, -20.47, 87.67,928.09],[282, 498, 0, 0, 0, 0,961.17]]
                        ],
                        [
                            "eid166",
                            "location",
                            120000,
                            30000,
                            "linear",
                            "${top-chicken5-6}",
                            [[511.45, 353, 0, 0, 0, 0,0],[561.66, 357.1, 170.71, 86.67, 73.98, 37.56,51.41],[719.44, 436.25, 55.28, -68.47, 35.08, -43.45,230.61],[744.38, 145.95, -79.24, -4.65, -57.63, -3.39,525.5],[553.76, 237, -67.65, 85.41, -145.65, 183.88,741.41],[463.35, 341.72, -47.59, 152.28, -25, 80.01,880.35],[497.01, 412.45, 0, 0, 0, 0,966.72]]
                        ],
                        [
                            "eid25",
                            "opacity",
                            0,
                            21488,
                            "linear",
                            "${paddock-b-1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            30000,
                            150000,
                            "linear",
                            "${paddock-b-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken6-1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid192",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken6-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "rotateZ",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-6}",
                            '-85deg',
                            '-85deg'
                        ],
                        [
                            "eid137",
                            "location",
                            90000,
                            30000,
                            "linear",
                            "${top-chicken4-2}",
                            [[436, 187.13, 0, 0, 0, 0,0],[464.22, 60.87, 10.96, 37.4, 46, 156.96,150.62],[420.85, 130.62, 15.38, 62.66, 19.64, 80.02,235.47],[512.99, 53.63, 14.27, 21.88, 41.9, 64.25,364.09],[430.18, 80.79, 5.54, 45.92, 5.15, 42.68,453.47],[453.56, 255.34, 41.2, 114.32, 21.18, 58.77,629.67],[511.28, 271.15, 0, 0, 0, 0,698.21]]
                        ],
                        [
                            "eid191",
                            "location",
                            120000,
                            30000,
                            "linear",
                            "${top-chicken5-4}",
                            [[516, 330, 0, 0, 0, 0,0],[563.29, 341.44, -31.29, 45.94, -30.03, 44.09,54.46],[683.39, 392.24, -73.35, 34.61, -54.23, 25.59,191.12],[628.82, 268.45, -44.46, 0.04, -107.36, 0.09,335.27],[626.93, 356.6, -66.03, 26.15, -50.86, 20.14,426.99],[532.97, 226.55, -49.97, 8.47, -81.02, 13.73,592.55],[456.39, 281.01, -36.68, 43.93, -41.38, 49.57,687.32],[447.17, 339.54, -34.57, 99.65, -15.51, 44.7,747.29],[421.87, 388.13, 0, 0, 0, 0,802.31]]
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken2-4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid62",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken2-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken2-4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken5-1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid156",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken5-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken2-2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid57",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken2-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken2-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid103",
                            "location",
                            60000,
                            30000,
                            "linear",
                            "${top-chicken3-3}",
                            [[308.72, 211.37, 0, 0, 0, 0,0],[132.91, 57.66, 39.29, -4.49, 185.31, -21.19,252.65],[257.58, 131.09, 121.16, 18.04, 149.11, 22.21,398.63],[255.31, 65.24, 31.34, -23.84, 40.85, -31.07,480.1],[356.35, 249.11, 59.8, 35.6, 128.66, 76.59,692.55],[450.13, 242.92, 47.55, -52.11, 26.9, -29.48,789.01],[455.04, 171.71, 0, 0, 0, 0,862.1]]
                        ],
                        [
                            "eid149",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken4-6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid148",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken4-6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid179",
                            "rotateZ",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-3}",
                            '-34deg',
                            '-34deg'
                        ],
                        [
                            "eid15",
                            "location",
                            0,
                            30000,
                            "linear",
                            "${top-chicken5}",
                            [[378, 533, 0, 0, 0, 0,0],[391.26, 555.34, 1.73, 30.08, 2.58, 44.83,26.84],[357.32, 571.15, -31.03, -57.74, -21.83, -40.62,71.5],[170.31, 468.01, -24.47, -68.24, -31.43, -87.68,286.88],[356.95, 376.56, 82.78, -146.49, 33.16, -58.69,498.14],[272, 320.28, 0, 0, 0, 0,618.8]]
                        ],
                        [
                            "eid96",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken3-3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid95",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken3-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken3-3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "rotateZ",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-5}",
                            '-80deg',
                            '-80deg'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "location",
                            30000,
                            30000,
                            "linear",
                            "${top-chicken2-4}",
                            [[286, 287.02, 0, 0, 0, 0,0],[230.88, 270.06, -127.55, 65.87, -46.67, 24.1,59.23],[143.07, 353.6, 17.85, -34.43, 13.77, -26.56,182.59],[84.87, 243.91, 89.05, -75.74, 103.84, -88.32,317.17],[347.71, 253.46, 159.74, -24.57, 175.6, -27.01,582.4],[339.83, 183.17, 0, 0, 0, 0,674.4]]
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${top-chicken6}",
                            '90deg',
                            '90deg'
                        ],
                        [
                            "eid121",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken4-1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken4-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken4-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken3-1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            60000,
                            0,
                            "linear",
                            "${top-chicken3-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            90000,
                            0,
                            "linear",
                            "${top-chicken3-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid155",
                            "location",
                            90000,
                            30000,
                            "linear",
                            "${top-chicken4-6}",
                            [[450, 223, 0, 0, 0, 0,0],[441.38, 201.1, -107.67, -49.7, -66.43, -30.67,28.85],[526.85, 195.66, 45.21, -45.89, 38.79, -39.38,131.53],[451.62, 161.57, 12.34, 47.54, 9.36, 36.05,223.72],[561.4, 174.31, 48.05, -41.45, 306.38, -264.26,377.98],[473.48, 122.89, -22.89, 74.82, -27.95, 91.35,496.73],[520.84, 156.33, 41.51, -61.85, 196.75, -293.2,635.34],[446.83, 144.55, -9.44, 98.98, -12.38, 129.83,737.67],[458.74, 328.25, 33.44, 118.85, 15.72, 55.88,922],[510.83, 352.83, 0, 0, 0, 0,987.44]]
                        ],
                        [
                            "eid114",
                            "location",
                            60000,
                            30000,
                            "linear",
                            "${top-chicken3-5}",
                            [[363.99, 181, 0, 0, 0, 0,0],[146.56, 64.21, -93.99, 32.52, -62.19, 21.52,247.91],[286.5, 111.58, 66.92, -76.02, 119.54, -135.81,421.89],[239.95, 31.94, -82.7, 161.73, -42.71, 83.52,535.47],[277.65, 173.05, 6.45, 4.83, 180.5, 135.1,698.68],[300.88, 196.53, 31.47, -2.97, 31.08, -2.93,732.7],[287.86, 162.02, 15.61, -11.13, 22.72, -16.2,772.97],[339.03, 179.31, 6.74, 255.45, 0.32, 12.31,827.91],[376.04, 241.61, 20.85, 0.86, 23.47, 0.97,915.88],[389.03, 248.48, 43.51, 7.33, 30.7, 5.17,931.03],[437.43, 246.14, 17.8, -1.44, 46.28, -3.74,979.6],[455.48, 248.2, 40.5, -17.39, 8.35, -3.59,997.84],[474.52, 220.02, 71.8, -68.17, 29.25, -27.77,1032.65],[526.76, 175.01, 0, 0, 0, 0,1101.62]]
                        ],
                        [
                            "eid173",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken5-2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid172",
                            "opacity",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid215",
                            "opacity",
                            150000,
                            0,
                            "linear",
                            "${top-chicken5-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${paddock-a-1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            30000,
                            22500,
                            "linear",
                            "${paddock-a-1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid233",
                            "opacity",
                            60000,
                            120000,
                            "linear",
                            "${paddock-a-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "location",
                            30000,
                            30000,
                            "linear",
                            "${top-chicken2-3}",
                            [[282, 356, 0, 0, 0, 0,0],[260.17, 359.04, 17.94, -27.31, 28.31, -43.09,30.52],[289.06, 319.6, 6.3, -14.68, 22.08, -51.43,79.56],[156.26, 334.88, 11.66, -31.43, 5.75, -15.51,213.78],[140.68, 217.83, 42.16, -35.13, 47.45, -39.54,333.73],[200.67, 311.53, -25.19, -399.57, -4.32, -68.58,452.84],[329.19, 251.93, 58.19, -68.24, 94.31, -110.6,638.16],[307.57, 211.19, 0, 0, 0, 0,692.56]]
                        ],
                        [
                            "eid37",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${top-chicken3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            30000,
                            0,
                            "linear",
                            "${top-chicken3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid187",
                            "rotateZ",
                            120000,
                            0,
                            "linear",
                            "${top-chicken5-4}",
                            '-47deg',
                            '-47deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("rotational-paddock_edgeActions.js");
})("EDGE-2183534175");
