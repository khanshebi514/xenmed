import Link from "next/link";


export const NAV_ITEM_LINKS = [
    {
        key:'1',
        label:"About Us",
        pathUrl : '/about',
        path:(<Link href='/about-us'>About Us</Link>),
        subItem:false,

    },

    {
        key:'2',
        label:"Services",
        pathUrl : '/services',
        path:(<Link href='/services'>Services</Link>),
        subItem:true,
        subItemMenu:[
            {
                key:'201',
                label:"Medical Billing Services",
                pathUrl : '/medical-billing-services',
                text:'Explore our comprehensive Medical Billing Services',
                path:(<Link href='/medical-billing-services'>Medical Billing Services</Link>),
            },
            {
                key:'202',
                label:"Medical Coding Services",
                pathUrl : '/medical-coding-services',
                text:'Streamline billing with our Medical Coding Services.',
                path:(<Link href='/medical-coding-services'>Medical Coding Services</Link>),
            },
            {
                key:'203',
                pathUrl : '/provider-credintialing-services',
                label:"Provider Credintialing Services",
                text:'Your trusted partner in seamless healthcare provider credentialing !',
                path:(<Link href='/provider-credintialing-services'>Provider Credintialing Services</Link>),
            },
            {
                key:'204',
                label:"Proir Authorization Services",
                pathUrl : '/proir-authorization-services',
                text:'Streamlining access, empowering healthcare innovation.',
                path:(<Link href='/proir-authorization-services'>Proir Authorization Services</Link>),
            },
            {
                key:'205',
                label:"Eligibility Verificaiton Services",
                pathUrl : '/provider-credintialing-services',
                text:'Streamline Verification, Navigate Benefits Efficiently Here!',
                path:(<Link href='/provider-credintialing-services'>Eligibility Verificaiton Services</Link>),
            },
            {
                key:'206',
                label:"Out of Net Work Billing Services",
                pathUrl : '/out-of-net-work-billing-services',
                text:'Streamline billing chaos, boost practice efficiency',
                path:(<Link href='/out-of-net-work-billing-services'>Out of Net Work Billing Services</Link>),
            },
            {
                key:'207',
                label:"Healthcare Digital Marketing Services",
                pathUrl : '/healthcare-digital-marketing-services',
                text:'Elevating Healthcare Brands Cutting-Edge Digital Solutions',
                path:(<Link href='/healthcare-digital-marketing-services'>Healthcare Digital Marketing Services</Link>),
            },
            {
                key:'208',
                label:"Healthcare Website Development Services",
                pathUrl : '/healthcare-website-development-services',
                text:'Elevating Medical practices with innovative website services.',
                path:(<Link href='/healthcare-website-development-services'>Healthcare Website Development Services</Link>),
            },

            {
                key:'209',
                label:"Denial Management Services",
                pathUrl : '/denial-management-services',
                text:'Streamline denials, boost revenue, conquer inefficiency.',
                path:(<Link href='/denial-management-services'>Denial Management Services</Link>),
            },
            {
                key:'210',
                label:"AR Recovery Services",
                pathUrl : '/ar-recovery-services',
                text:'Revive your cash flow with AR recovery!',
                path:(<Link href='/ar-recovery-services'>AR Recovery Services</Link>),
            },

        ]
    },

    {
        key:'3',
        label:'Specialties',
        pathUrl:'specialties',
        path:(<Link href='/specialties'>Specialties</Link>),
        subItem:true,
        subItemMenu:[
            {
                key:'301',
                label:"Medical Billing Services",
                pathUrl : '/medical-billing-services',
                path:(<Link href='/medical-billing-services'>Medical Billing Services</Link>),
            },
            {
                key:'302',
                label:"Medical Coding Services",
                pathUrl : '/medical-coding-services',
                path:(<Link href='/medical-coding-services'>Medical Coding Services</Link>),
            },
            {
                key:'303',
                pathUrl : '/provider-credintialing-services',
                label:"Provider Credintialing Services",
                path:(<Link href='/provider-credintialing-services'>Provider Credintialing Services</Link>),
            },
            {
                key:'304',
                label:"Proir Authorization Services",
                pathUrl : '/proir-authorization-services',
                path:(<Link href='/proir-authorization-services'>Proir Authorization Services</Link>),
            },
            {
                key:'305',
                label:"Eligibility Verificaiton Services",
                pathUrl : '/provider-credintialing-services',
                path:(<Link href='/provider-credintialing-services'>Eligibility Verificaiton Services</Link>),
            },
            {
                key:'306',
                label:"Out of Net Work Billing Services",
                pathUrl : '/out-of-net-work-billing-services',
                path:(<Link href='/out-of-net-work-billing-services'>Out of Net Work Billing Services</Link>),
            },
            {
                key:'307',
                label:"Healthcare Digital Marketing Services",
                pathUrl : '/healthcare-digital-marketing-services',
                path:(<Link href='/healthcare-digital-marketing-services'>Healthcare Digital Marketing Services</Link>),
            },
            {
                key:'308',
                label:"Healthcare Website Development Services",
                pathUrl : '/healthcare-website-development-services',
                path:(<Link href='/healthcare-website-development-services'>Healthcare Website Development Services</Link>),
            },

            {
                key:'309',
                label:"Denial Management Services",
                pathUrl : '/denial-management-services',
                path:(<Link href='/denial-management-services'>Denial Management Services</Link>),
            },
            {
                key:'310',
                label:"AR Recovery Services",
                pathUrl : '/ar-recovery-services',
                path:(<Link href='/ar-recovery-services'>AR Recovery Services</Link>),
            },

        ]
    },

    {
        key:'4',
        label:"Pricing",
        pathUrl : '/pricing',
        path:(<Link href='/pricing'>Pricing</Link>),
        subItem:false
    },
    {
        key:'5',
        label:"Testmonial",
        pathUrl : '/testmonial',
        path:(<Link href='/testmonial'>Testmonials</Link>),
        subItem:false,
    }



]

export const WHY_US = [
    {
        iconUrl: "/cards/7days.png",
        title:"7 Days Turn Around Time",
        description:"Our healthcare billing solutions expedite payment processing, resulting in earlier claim payments due to the streamlined workflows we've established."
    },
    {
        iconUrl: "/cards/expensis.png",
        title:"20% Revenue Increase",
        description:"As a top-tier medical billing company, we ensure growth in revenue by up to 20% through improved clean claim rates."
    },
    {
        iconUrl: "/cards/revive.png",
        title:"Clean Claim Rate",
        description:"Our rule-based system enables us to achieve an impressive 98% first-pass combination as a resulting medical billing and coding company."
    },
]

export const SERVICES = [
    {
        iconUrl: "/cards/medical-billing-1.png",
        title:"Medical Billing",
        description:"Our medical billing services ensure your practice's financial health. We meticulously manage claims, maximize revenue, and eliminate administrative burdens, letting you focus on patient care."
    },
    {
        iconUrl: "/cards/medical-coding.png",
        title:"Medical Coding",
        description:"Accurate coding is crucial. XenMD's experts ensure compliance, minimize errors, and streamline billing processes, resulting in better financial performance for your practice."
    },
    {
        iconUrl: "/cards/provider-1.png",
        title:"Provider Credentialing Services",
        description:"Navigating the complex world of provider credentialing can be challenging. We handle the paperwork, ensuring you're seamlessly onboarded with insurance networks."
    },
    {
        iconUrl: "/cards/prior-authorization.png",
        title:"Prior Authorization",
        description:"Our prior authorization support reduces delays in treatment and payment. We handle the paperwork and communication, ensuring a smoother process for both providers and patients."
    },
    {
        iconUrl: "/cards/DENIAL-MANAGEMNT.png",
        title:"Denial Management",
        description:"Unresolved denials can cripple your revenue. XenMD's denial management services identify and rectify issues, ensuring a smooth cash flow and healthier financials for your practice."
    },
    {
        iconUrl: "/cards/AR-RECOVEREY-ICON.png",
        title:"Accounts Receivable (AR) Recovery",
        description:"Reclaim lost revenue and boost your practice's financial health with XenMD's AR Recovery services. Our specialized team is dedicated to identifying and rectifying outstanding accounts, ensuring you receive the funds you owe."
    },
    {
        iconUrl: "/cards/eligibilty-verification.png",
        title:"Eligibility Verification",
        description:"Avoid claim denials with our eligibility verification services. We confirm patients' insurance coverage, reducing claim rejections and improving cash flow."
    },
    {
        iconUrl: "/cards/OUT-OF-NETWORK.png",
        title:"Out Of Network Billing",
        description:"We specialize in optimizing out-of-network billing, helping you access a broader patient base and increasing your practice's revenue."
    },
    {
        iconUrl: "/cards/revive.png",
        title:"Medical Billing",
        description:"Our medical billing services ensure your practice's financial health. We meticulously manage claims, maximize revenue, and eliminate administrative burdens, letting you focus on patient care."
    },
    {
        iconUrl: "/cards/web-deisgn.png",
        title:"Medical Billing",
        description:"Our medical billing services ensure your practice's financial health. We meticulously manage claims, maximize revenue, and eliminate administrative burdens, letting you focus on patient care."
    },
];

export const WHY_XEN_MED = [
    {
        key:'11',
        title:'Digital Marketing Mastery',
        description:"In a digital age, your online presence is crucial. Our expert digital marketing team knows how to position your practice in the online space. We design engaging campaigns that attract new patients, boost your visibility, and drive growth."
    },

    {
        key:'12',
        title:'A Comprehensive Approach',
        description:"We understand that the healthcare landscape is evolving. To thrive, you need more than just billing expertise. At XenMD, we offer a comprehensive approach that combines billing excellence with cutting-edge digital marketing strategies. We see the bigger picture and help you tap into new revenue streams."
    },

    {
        key:'13',
        title:'Billing Optimization',
        description:"Billing isn't just about processing claims; it's about maximizing revenue. XenMD's rigorous approach ensures you're not leaving money on the table. We're dedicated to identifying every legitimate claim, securing the reimbursements you rightfully deserve"
    },
    {
        key:'14',
        title:'Efficiency Unleashed',
        description:"Our streamlined processes free up your time and resources. You can redirect your focus to what truly matters—providing top-quality patient care. XenMD doesn't just save you money; we save you invaluable time."
    },
]

export const RCM_XEN_MED = [
    {
        key:'101',
        title:'Customized Solutions',
        description:"We understand that every practice is unique, which is why we offer personalized billing solutions tailored to your specific needs and goals. Whether you're a solo practitioner or a multi-specialty group, we'll work closely with you to develop a customized billing strategy that aligns with your practice's objectives.",
        vertical:true,
    },

    {
        key:'102',
        title:'Efficiency',
        description:"Time is of the essence in the healthcare industry, which is why we prioritize efficiency in everything we do. Our advanced technology and streamlined processes ensure prompt claims submission, faster reimbursement turnaround times, and reduced administrative burden for your staff.",
        vertical:true,
    },

    {
        key:'103',
        title:'Revenue Maximization',
        description:"We leave no stone unturned when it comes to maximizing your revenue potential. Our proactive approach to denials management, thorough claims scrubbing, and rigorous follow-up on unpaid accounts mean more money in your pocket and less revenue leakage for your practice.",
        vertical:true,
    },

    {
        key:'104',
        title:'Expertise',
        description:"With years of experience in medical billing and revenue cycle management, our team of experts understands the complexities of healthcare billing inside and out. From coding accuracy to payer negotiations, we have the knowledge and skills to optimize your revenue stream and maximize reimbursements.",
        vertical:false,
    },

    {
        key:'105',
        title:'Transparency and Accountability',
        description:"With XENMD, you'll have full visibility into your practice's financial performance at all times. Our robust reporting tools and transparent communication ensure that you're always informed and empowered to make data-driven decisions for the success of your practice.",
        vertical:false,
    },







]

export const WHOM_WE_SERV = [
    {
        key:'1',
        label:'Hospital Billing',
        iconUrl:'/about/services/serve-1.png'
    },
    {
        key:'2',
        label:'Cardiology Billing',
        iconUrl:'/about/services/serve-2.png'
    },
    {
        key:'3',
        label:'Laboratory Billing',
        iconUrl:'/about/services/serve-3.png'
    },
    {
        key:'4',
        label:'Nephorology Billing',
        iconUrl:'/about/services/serve-4.png'
    },
    {
        key:'5',
        label:'Radiologo Billing',
        iconUrl:'/about/services/serve-5.png'
    },
    {
        key:'6',
        label:'Surgery Billing',
        iconUrl:'/about/services/serve-6.png'
    },

    {
        key:'7',
        label:'Chiroprating Billing',
        iconUrl:'/about/services/serve-7.png'
    },
    {
        key:'8',
        label:'Hematology Billing',
        iconUrl:'/about/services/serve-8.png'
    },

    {
        key:'9',
        label:'Rheumatology Billing',
        iconUrl:'/about/services/serve-9.png'
    },

    {
        key:'10',
        label:'Dermatology Billing',
        iconUrl:'/about/services/serve-10.png'
    },

]