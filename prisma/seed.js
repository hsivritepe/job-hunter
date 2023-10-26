const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const companyNames = [
    'CSC Generation',
    'Amazon',
    'Storm2',
    'Push',
    'Commit',
    'Slack',
    'MVP Talent Corp',
    'Bounce',
    'Synergy Loft Inc.',
    'Sage Recruiting',
    'Busbud',
    'StackAdapt',
    'Affinity.co',
    'Applied Systems',
    'Zapier',
    'CapIntel',
    'Pagefreezer',
    'Storm4 - AgTech',
    'NextPath Career Partners',
    'Chime',
    'Mosey',
    'ETM Core',
    'Stan',
    'Shakepay',
    'Basetwo AI',
    'Clipboard Health',
    'Lululemon',
    'Sonos',
    'BC Public Service',
    'Konnect Way',
    'd1g1t',
    'Roofr',
    'Gigster Network',
    'Swim Recruiting',
    'Adobe',
    'Pani',
    'PYMNTS',
    'Milk Moovement',
    'Klue',
    "Let's Roam",
    'Pixieset',
    'Pattern Learning AI',
    'Asana',
    'Clevertech',
    'Randstad',
    'Fullscript',
    'Coconut',
    'RainBarrel',
    'Fortinet',
    'The Conference Board of Canada',
    'SimplyPHP',
    'Craver',
    'Super.com',
    'PolicyMe',
    'BrainStation',
    'Jungle Scout',
    'HustleWing',
    'eCapital Corp.',
    'Cedar',
    'Binance.us',
    'Airble',
];

const actionTypes = [
    'Apply to the job',
    'Send a follow up email',
    'Send a thank you email',
    'Get application rejection email',
    'Send an email to ask for feedback',
    'Get a response for the next step',
    'Do the interview',
    'Take note',
];

const jobs = [
    {
        company_name: 'CSC Generation',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1IMQEv80AIOrEGCYa7saInOYWVz7CdmsCtkBhQlsW5qI/edit',
        job_link:
            'https://jobs.lever.co/cscgeneration-2/bdab5d05-0a69-48e6-8e44-6526441b9ac0?source=6',
        cover_link: '',
    },
    {
        company_name: 'Amazon',
        job_title: 'SDE II Event - Vancouver, Amazon Store',
        resume_link: '',
        job_link: 'SDE II Event - Vancouver, Amazon Stores',
        cover_link: '',
    },
    {
        company_name: 'Storm2',
        job_title: 'Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1GxnkvkP6uyJXfKTX2IhMlTdItPgIQxmM8kgZbhPRM4M/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3664975100/?trackingId=&refId=&midToken=AQH_C6qXrxr9gA&midSig=2TZ4Tmo0g71GU1&',
        cover_link: '',
    },
    {
        company_name: 'Push',
        job_title: 'Full Stack Software Engineer, Integrations',
        resume_link:
            'https://docs.google.com/document/d/1ZvfgQobQjsqsZAjlJs6Gd6gMhG2ThAhyM0FLnfc-uaQ/edit',
        job_link:
            'https://app-elb.pushoperations.com/ats/job-postings/b30a1aca-dd6f-4aab-9f52-091c2d7879a0/public',
        cover_link: '',
    },
    {
        company_name: 'Commit',
        job_title: 'Full Stack Engineer [Remote - US + Canada]',
        resume_link:
            'https://docs.google.com/document/d/1nD2rclJMm_XUAVV7gRtRmaUR8PrwUj72F52Ua5v-zlE/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3681517334/?trackingId=SsngWQo1W8XMWOFm%2FMKKVw%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Slack',
        job_title:
            'Software Engineer, Backend - Slack (Multiple Levels)',
        resume_link:
            'https://docs.google.com/document/d/1y_EOAqq4usk7Qg0AqC8OQI4-X3pvJlHCo6AqU_vg3H0/edit',
        job_link:
            'https://salesforce.wd12.myworkdayjobs.com/en-US/Slack/job/Software-Engineer--Backend---Slack--Multiple-Levels-_JR207032-1',
        cover_link: '',
    },
    {
        company_name: 'MVP Talent Corp',
        job_title: 'Senior Frontend Developer',
        resume_link:
            'https://docs.google.com/document/d/1fjWkIjuQTxMteiPMAVX1GTD0tJ5EjZt0YVUcy8UzJ5w/edit#heading=h.3znysh7',
        job_link: 'Linkedin Quick apply',
        cover_link: '',
    },
    {
        company_name: 'Bounce',
        job_title: 'Senior Frontend Software Engineer',
        resume_link:
            '20230821-Hakan-Sivritepe-Bounce-Senior Frontend Software Engineer',
        job_link: 'Linkedin Quick apply',
        cover_link: '',
    },
    {
        company_name: 'Synergy Loft Inc.',
        job_title: 'Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3692308472/?refId=ByteString(length%3D16%2Cbytes%3D1a511fbc...169b6332)',
        cover_link: '',
    },
    {
        company_name: 'Sage Recruiting',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3691796005/?refId=ByteString(length%3D16%2Cbytes%3D1a511fbc...169b6332)&',
        cover_link: '',
    },
    {
        company_name: 'Busbud',
        job_title: 'Software Developer - Platform',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3667139355/?refId=940d19cc-d7e2-42b5-bcfb-c1e960be4a42&',
        cover_link: '',
    },
    {
        company_name: 'StackAdapt',
        job_title:
            'Senior Full Stack Engineer - Internal Tools & Billing',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3674768930/?refId=940d19cc-d7e2-42b5-bcfb-c1e960be4a42&',
        cover_link: '',
    },
    {
        company_name: 'Affinity.co',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1YRYsP0DC2hhxzqe93T9egoknlbwQFR8JmRQcYdyE2Qs/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3675587733/?refId=940d19cc-d7e2-42b5-bcfb-c1e960be4a42&',
        cover_link: '',
    },
    {
        company_name: 'Applied Systems',
        job_title: 'Full Stack Developer (React.js)',
        resume_link:
            'https://docs.google.com/document/d/1IkBTmm3sU5cWHQuop91xaXjn-RTMV0CWRIGEIVKbpFA/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3675950142/post-apply/similar-jobs/?context=offsite&postApplyJobId=3675950142&',
        cover_link: '',
    },
    {
        company_name: 'Zapier',
        job_title: 'Sr. Engineer, Full Stack (Identity)',
        resume_link:
            'https://docs.google.com/document/d/1ANzR1JLbXUEQ0fLIc0NeKVymr7VmUfFPbyROeXXtPAk/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3625493463/?refId=808354d4-4f39-44d9-bbbc-763ca5d97ea5&',
        cover_link: '',
    },
    {
        company_name: 'CapIntel',
        job_title: 'Senior Software Developer - Frontend',
        resume_link:
            'https://docs.google.com/document/d/1XZxBYAnmcWrMjiYv3NYRU8Mr3Fe3TKsv1sEPQI-ous8/edit#heading=h.lnxbz9',
        job_link:
            'https://www.linkedin.com/jobs/view/3689912441/?refId=808354d4-4f39-44d9-bbbc-763ca5d97ea5&',
        cover_link: '',
    },
    {
        company_name: 'Pagefreezer',
        job_title: 'Software Engineer, Fullstack',
        resume_link:
            'https://docs.google.com/document/d/140DJY-CAj0YnYyLTANsjtaSiUgcYp14Nm0sThOKYMeQ/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3693019124/?trackingId=C9lh3JaXuZW%2Bz7WuJZjgdA%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Storm4 - AgTech',
        job_title: 'Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1f6pR4noIqq5PPG-VBbDSv-bx-gBfoVgBi5X40pej8cY/edit#heading=h.lnxbz9',
        job_link:
            'https://www.linkedin.com/jobs/view/3680897384/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'NextPath Career Partners',
        job_title:
            'Full Stack Engineer – React / Next.js – REMOTE (3312)',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3681722076/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'Chime',
        job_title: 'Software Developer',
        resume_link:
            'https://docs.google.com/document/d/1gGSza6Y4PLfDvRXuj4t-T75KxJtzHRZ0DvsDT_z9824/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3674498325/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'Mosey',
        job_title: 'Senior Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1G70rin5BJAMciD-VswqV31Cbl-fVjn1Ns0eCYYhmvHU/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3696158465/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'ETM Core',
        job_title: 'Frontend Developer - Remote',
        resume_link:
            'https://docs.google.com/document/d/1i1qE7bUK8Wm5yPQaEIUTxoKX9ZL8Rv7qe1-5SWtwLEI/edit#heading=h.1fob9te',
        job_link:
            'https://www.linkedin.com/jobs/view/3695971987/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'Stan',
        job_title: 'Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1_nWfESeWnVc_i2zxUnjSLZK-BsEaWtt5ysFJug3B4co/edit',
        job_link:
            'https://stanforcreators.notion.site/Full-Stack-Software-Engineer-a5165fa3b9224d7993ed3a8942aff739',
        cover_link: '',
    },
    {
        company_name: 'Shakepay',
        job_title: 'Senior Full Stack Developer (Remote - Canada)',
        resume_link:
            '20230823-Hakan-Sivritepe-Shakepay-Senior-Full-Stack-Developer-Remote-Canada',
        job_link:
            'https://www.linkedin.com/jobs/view/3668078067/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'Basetwo AI',
        job_title: 'Software Engineer, Full Stack',
        resume_link:
            'https://docs.google.com/document/d/1BGeCm_Td8FdjaOa9ca6tyGbFTmNOTqt6gDCZnlMmg9Q/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3698167391/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'Clipboard Health',
        job_title: 'Full-Stack Software Engineer',
        resume_link:
            '20230823-Hakan-Sivritepe-Clipboard-Health-Full-Stack-Software-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3694285945/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_name: 'Lululemon',
        job_title:
            'Senior Full Stack Engineer (Front End focus) - lululemon Studio (Hybrid, Vancouver)',
        resume_link:
            'https://docs.google.com/document/d/1wU0qMKYw0jijblW9DryejlhpGrs8ouOHlHPESM-M2ww/edit#heading=h.3znysh7',
        job_link:
            'https://www.linkedin.com/jobs/view/3676776765/?refId=9a018eca-a803-42d8-a5a7-ab84e6650e14&',
        cover_link: '',
    },
    {
        company_name: 'Sonos',
        job_title: 'Software Engineer - Content Systems',
        resume_link:
            '20230824-Hakan-Sivritepe-Software-Engineer-Content-Systems',
        job_link:
            'https://www.linkedin.com/jobs/view/3697395126/?alternateChannel=search&refId=GeM%2FkfoAhkofesGmGOlONQ%3D%3D&',
        cover_link: '',
    },
    {
        company_name:
            'BC Public Service · British Columbia, Canada (Remote)',
        job_title: 'Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3698445449/?trackingId=ja2PD0J2Tw4zerlhZOg7Rg%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Konnect Way',
        job_title: 'Senior React + PHP Developer',
        resume_link:
            'https://docs.google.com/document/d/12TJszmIIe32zdwDUl0WveA21Fpyajbk8qjSZ44SrcXA/edit#heading=h.3znysh7',
        job_link:
            'https://www.linkedin.com/jobs/view/3666768299/?refId=177023dc-621c-434c-a54a-d6b7f7fbca5c&',
        cover_link: '',
    },
    {
        company_name: 'd1g1t',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/1J6zr9ZbyaM20RjBEgS0ESYkXTQJL_lNhx44uTgzxNfI/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3674019087/?refId=177023dc-621c-434c-a54a-d6b7f7fbca5c&',
        cover_link: '',
    },
    {
        company_name: 'Roofr',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            '20230828-Hakan-Sivritepe-Roofr-Senior-Frontend-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3706104549/?trackingId=WYQqstRtXGdjVidRgov%2BQQ%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Gigster Network',
        job_title: 'Senior Front-End Developer',
        resume_link:
            '20230901-Hakan-Sivritepe-Gigster-Network-Senior-Front-End-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3686308419/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'Swim Recruiting',
        job_title: 'PHP Software Engineer',
        resume_link:
            '20230901-Hakan-Sivritepe-Swim-Recruiting-PHP-Software-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3690782285/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'Adobe',
        job_title: 'Senior Software Engineer',
        resume_link:
            '20230901-Hakan-Sivritepe-Adobe-Senior-Software-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3704518292/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'Pani',
        job_title: 'Full-Stack Developer',
        resume_link:
            '20230901-Hakan-Sivritepe-Pani-Full-Stack-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3701471334/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'PYMNTS',
        job_title: 'Full-Stack React/Node.js Developer',
        resume_link:
            '20230906-Hakan-Sivritepe-PYMNTS-Full-Stack React/Node.js-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3701790168/?refId=f96cb127-555f-4fb4-86f0-3a21f54744f6&',
        cover_link: '',
    },
    {
        company_name: 'Milk Moovement',
        job_title: 'Full Stack Developer II',
        resume_link:
            '20230908-Hakan-Sivritepe-Milk-Moovement-Full-Stack-Developer-II',
        job_link:
            'https://www.linkedin.com/jobs/view/3706265507/?refId=16079862-54a3-4282-ab67-0e3cc82ddbf0&',
        cover_link: '',
    },
    {
        company_name: 'Klue',
        job_title: 'Intermediate Frontend Engineer ',
        resume_link:
            '20230908-Hakan-Sivritepe-Klue-Intermediate-Frontend-Engineer ',
        job_link:
            'https://www.linkedin.com/jobs/view/3700024349/?refId=16079862-54a3-4282-ab67-0e3cc82ddbf0&',
        cover_link: '',
    },
    {
        company_name: "Let's Roam",
        job_title: 'Junior & Mid-Level Full Stack Developer',
        resume_link:
            '20230911-Hakan-Sivritepe-Lets-Roam-Junior-Mid-Full-Stack',
        job_link:
            'https://www.linkedin.com/jobs/view/3689652497/?trackingId=hWV%2Fm2OMQ1eeRTrK4hALGQ%3D%3D&refId=UzRzaxpvRLOGVqcTGu4vcQ%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Pixieset',
        job_title: 'Software Developer, Full Stack',
        resume_link: '20230911-Hakan-Sivritepe-Pixieset-Full-Stack',
        job_link:
            'https://pixieset.breezy.hr/p/c8abb7691da2-software-developer-full-stack',
        cover_link: '',
    },
    {
        company_name: 'Pixieset',
        job_title: 'Software Developer, Full Stack (Growth)',
        resume_link: '20230911-Hakan-Sivritepe-Pixieset-Full-Stack',
        job_link:
            'https://pixieset.breezy.hr/p/047d313cd6f7-software-developer-full-stack-growth',
        cover_link: '',
    },
    {
        company_name: 'Shakepay',
        job_title:
            'Intermediate Full Stack Developer (Remote - Canada)',
        resume_link:
            '20230911-Hakan-Sivritepe-Shakepay-Intermediate-Full-Stack-Developer-Remote-Canada',
        job_link:
            'https://www.linkedin.com/jobs/view/3718410689/?alternateChannel=search&refId=4Tdbz%2FoYqxlIDjbvaB6sSg%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Pattern Learning AI',
        job_title: 'Entry-Level React Developer - US/Canada',
        resume_link:
            '20230912-Hakan-Sivritepe-Pattern-Learning-Entry-Level-React-Dev',
        job_link:
            'https://www.linkedin.com/jobs/view/3718050458/?refId=99c99081-83fb-4893-ab1b-8d704d936523&',
        cover_link: '',
    },
    {
        company_name: 'Asana',
        job_title: 'Software Engineer, Product',
        resume_link: 'Easy Apply - Linkedin with Master resume',
        job_link:
            'https://www.linkedin.com/jobs/view/3715546445/?refId=99c99081-83fb-4893-ab1b-8d704d936523&',
        cover_link: '',
    },
    {
        company_name: 'Clevertech',
        job_title: 'Senior Full Stack Engineer - Javascript',
        resume_link: '',
        job_link: '',
        cover_link: '',
    },
    {
        company_name: 'Randstad',
        job_title: 'Front End x 2 - Remote - 4 months',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3712104136/?trackingId=5h1E%2B26%2Fx22BRAuGarxyrw%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Fullscript',
        job_title: 'Javascript Engineer II',
        resume_link:
            '20230914-Hakan-Sivritepe-Fullscript-JS-Engineer-II',
        job_link:
            'https://www.linkedin.com/jobs/view/3712103155/?trackingId=f9sYUN92D%2F2PZZFHb2QDaw%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Coconut',
        job_title: 'Senior Developer',
        resume_link:
            '20230918-Hakan-Sivritepe-Coconut-Senior-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3695489352/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'RainBarrel',
        job_title: 'Senior Full-Stack Developer',
        resume_link:
            '20230921-Hakan-Sivritepe-RainBarrel-Senior-Full-Stack',
        job_link:
            'https://loknowcareers.applytojobs.ca/engineering+and+technology/24909',
        cover_link:
            'https://docs.google.com/document/d/1cTyKv_HtpPw0-VTlZO_F2WVcarDKjKn72bnMiUIPccU/edit',
    },
    {
        company_name: 'Fortinet',
        job_title: 'Web Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-Fortinet-Web-Developer',
        job_link: '',
        cover_link: '',
    },
    {
        company_name: 'The Conference Board of Canada',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            '20230929-Hakan-Sivritepe-Conference-Board-Canada-Senior-Web',
        job_link:
            'https://www.linkedin.com/jobs/view/3729800594/?refId=ByteString(length%3D16%2Cbytes%3D801f910a...d5700709)&',
        cover_link: '',
    },
    {
        company_name: 'SimplyPHP',
        job_title: 'Web Application Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-SimplyPHP-Web-Application-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3726280868/?refId=3f64890a-9b7f-436e-bdfd-85df78bd000f&',
        cover_link: '',
    },
    {
        company_name: 'Craver',
        job_title: 'Intermediate Frontend Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-Craver-Intermediate-Frontend-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3726533471/?refId=ByteString(length%3D16%2Cbytes%3D6a0e5b19...676f51a4)&',
        cover_link: '',
    },
    {
        company_name: 'Super.com',
        job_title:
            'Intermediate Software Engineer (Full Stack) (Remote)',
        resume_link:
            '20230929-Hakan-Sivritepe-Super-Intermediate-Software-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3726202995/?refId=ByteString(length%3D16%2Cbytes%3Df8fee512...3c3f1d6b)&',
        cover_link: '',
    },
    {
        company_name: 'SimplyPHP',
        job_title: 'PHP Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-SimplyPHP-Web-Application-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3727230094/?alternateChannel=search&refId=DdPHfKS1WwTrloWRF%2FQP%2Bg%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'PolicyMe',
        job_title: 'Software Engineer - Fullstack',
        resume_link:
            'https://www.linkedin.com/jobs/view/3727222280/?refId=da8434e9-6006-430e-b50c-b45cdf7cb65d&',
        cover_link: '',
    },
    {
        company_name: 'BrainStation',
        job_title: 'Web Developer - Educator',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://brainstation.io/careers/jobs/educator-web-developer_5763039003',
        cover_link:
            '20231005-Hakan-Sivritepe-BrainStation-Educator-Cover',
    },
    {
        company_name: 'Jungle Scout',
        job_title: 'Software Engineer',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://www.linkedin.com/jobs/view/3712198245/?refId=dc7bf84e-4ab9-4f9f-96ea-72829b168296&',
        cover_link: '',
    },
    {
        company_name: 'HustleWing',
        job_title: 'Web Developer',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://www.linkedin.com/jobs/view/3735228144/?refId=ByteString(length%3D16%2Cbytes%3D65fe73fd...ea0e4254)&',
        cover_link: '',
    },
    {
        company_name: 'eCapital Corp.',
        job_title: 'Full-Stack Software Developer',
        resume_link:
            '20231008-Hakan-Sivritepe-eCapitalCorp-Full-Stack-Software-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3729786794/?refId=ByteString(length%3D16%2Cbytes%3D0908c82f...0daa04b4)&',
        cover_link: '',
    },
    {
        company_name: 'Cedar',
        job_title: 'Software Engineer (Launch)',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://www.linkedin.com/jobs/view/3734045040/?refId=ByteString(length%3D16%2Cbytes%3D0add19db...bef3d719)&',
        cover_link: '',
    },
    {
        company_name: 'Binance.us',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            '20231012-Hakan-Sivritepe-Binance-Senior-Web-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3733303014/?alternateChannel=search&refId=IK59dT42JsGdUp8i%2B%2BNCwA%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Klue',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            '20230908-Hakan-Sivritepe-Klue-Intermediate-Frontend-Engineer ',
        job_link:
            'https://www.linkedin.com/jobs/view/3679654545/?alternateChannel=search&refId=MPSkZLrKDkJSWsGO%2BxNvag%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Airble',
        job_title: 'Software Developer',
        resume_link:
            '20231013-Hakan-Sivritepe-Airble-Softwware-Developer',
        job_link:
            'https://jobs.vantechjournal.com/software-developer-3439ae3c2a07',
        cover_link: '',
    },
];

const actions = [
    {
        id: 1,
        date: '2023/07/27',
        company_name: 'CSC Generation',
    },
    {
        id: 2,
        date: '2023/07/25',
        company_name: 'Amazon',
    },
    {
        id: 3,
        date: '2023/08/01',
        company_name: 'Storm2',
    },
    {
        id: 4,
        date: '2023/08/04',
        company_name: 'Push',
    },
    {
        id: 5,
        date: '2023/08/05',
        company_name: 'Commit',
    },
    {
        id: 6,
        date: '2023/08/05',
        company_name: 'Slack',
    },
    {
        id: 7,
        date: '2023/08/21',
        company_name: 'MVP Talent Corp',
    },
    {
        id: 8,
        date: '2023/08/21',
        company_name: 'Bounce',
    },
    {
        id: 9,
        date: '2023/08/21',
        company_name: 'Synergy Loft Inc.',
    },
    {
        id: 10,
        date: '2023/08/21',
        company_name: 'Sage Recruiting',
    },
    {
        id: 11,
        date: '2023/08/22',
        company_name: 'Busbud',
    },
    {
        id: 12,
        date: '2023/08/22',
        company_name: 'StackAdapt',
    },
    {
        id: 13,
        date: '2023/08/22',
        company_name: 'Affinity.co',
    },
    {
        id: 14,
        date: '2023/08/22',
        company_name: 'Applied Systems',
    },
    {
        id: 15,
        date: '2023/08/23',
        company_name: 'Zapier',
    },
    {
        id: 16,
        date: '2023/08/23',
        company_name: 'CapIntel',
    },
    {
        id: 17,
        date: '2023/08/23',
        company_name: 'Pagefreezer',
    },
    {
        id: 18,
        date: '2023/08/23',
        company_name: 'Storm4 - AgTech',
    },
    {
        id: 19,
        date: '2023/08/23',
        company_name: 'NextPath Career Partners',
    },
    {
        id: 20,
        date: '2023/08/23',
        company_name: 'Chime',
    },
    {
        id: 21,
        date: '2023/08/23',
        company_name: 'Mosey',
    },
    {
        id: 22,
        date: '2023/08/23',
        company_name: 'ETM Core',
    },
    {
        id: 23,
        date: '2023/08/23',
        company_name: 'Stan',
    },
    {
        id: 24,
        date: '2023/08/23',
        company_name: 'Shakepay',
    },
    {
        id: 25,
        date: '2023/08/23',
        company_name: 'Basetwo AI',
    },
    {
        id: 26,
        date: '2023/08/23',
        company_name: 'Clipboard Health',
    },
    {
        id: 27,
        date: '2023/08/24',
        company_name: 'Lululemon',
    },
    {
        id: 28,
        date: '2023/08/24',
        company_name: 'Sonos',
    },
    {
        id: 29,
        date: '2023/08/27',
        company_name: '(Remote)',
    },
    {
        id: 30,
        date: '2023/08/28',
        company_name: 'Konnect Way',
    },
    {
        id: 31,
        date: '2023/08/28',
        company_name: 'd1g1t',
    },
    {
        id: 32,
        date: '2023/09/01',
        company_name: 'Roofr',
    },
    {
        id: 33,
        date: '2023/09/01',
        company_name: 'Gigster Network',
    },
    {
        id: 34,
        date: '2023/09/01',
        company_name: 'Swim Recruiting',
    },
    {
        id: 35,
        date: '2023/09/01',
        company_name: '13Adobe',
    },
    {
        id: 36,
        date: '2023/09/01',
        company_name: 'Pani',
    },
    {
        id: 37,
        date: '2023/09/06',
        company_name: 'PYMNTS',
    },
    {
        id: 38,
        date: '2023/09/08',
        company_name: 'Milk Moovement',
    },
    {
        id: 39,
        date: '2023/09/11',
        company_name: '20Klue',
    },
    {
        id: 40,
        date: '2023/09/11',
        company_name: "Let's Roam",
    },
    {
        id: 41,
        date: '2023/09/11',
        company_name: 'Pixieset',
    },
    {
        id: 42,
        date: '2023/09/11',
        company_name: 'Pixieset',
    },
    {
        id: 43,
        date: '2023/09/11',
        company_name: 'Shakepay',
    },
    {
        id: 44,
        date: '2023/09/12',
        company_name: 'Pattern Learning AI',
    },
    {
        id: 45,
        date: '2023/09/12',
        company_name: 'Asana',
    },
    {
        id: 46,
        date: '2023/09/12',
        company_name: '20Clevertech',
    },
    {
        id: 47,
        date: '2023/09/14',
        company_name: 'Randstad',
    },
    {
        id: 48,
        date: '2023/09/14',
        company_name: '16Fullscript',
    },
    {
        id: 49,
        date: '2023/09/18',
        company_name: '25Coconut',
    },
    {
        id: 50,
        date: '2023/09/21',
        company_name: 'RainBarrel',
    },
    {
        id: 51,
        date: '2023/09/29',
        company_name: 'Fortinet',
    },
    {
        id: 52,
        date: '2023/09/29',
        company_name: 'The Conference Board of Canada',
    },
    {
        id: 53,
        date: '2023/09/29',
        company_name: '02SimplyPHP',
    },
    {
        id: 54,
        date: '2023/09/29',
        company_name: 'Craver',
    },
    {
        id: 55,
        date: '2023/09/29',
        company_name: 'Super.com',
    },
    {
        id: 56,
        date: '2023/10/02',
        company_name: '05SimplyPHP',
    },
    {
        id: 57,
        date: '2023/10/02',
        company_name: 'PolicyMe',
    },
    {
        id: 58,
        date: '2023/10/05',
        company_name: 'BrainStation',
    },
    {
        id: 59,
        date: '2023/10/06',
        company_name: 'Jungle Scout',
    },
    {
        id: 60,
        date: '2023/10/07',
        company_name: 'HustleWing',
    },
    {
        id: 61,
        date: '2023/10/07',
        company_name: 'eCapital Corp.',
    },
    {
        id: 62,
        date: '2023/10/07',
        company_name: '11Cedar',
    },
    {
        id: 63,
        date: '2023/10/12',
        company_name: 'Binance.us',
    },
    {
        id: 64,
        date: '2023/10/13',
        company_name: 'Klue',
    },
    {
        id: 65,
        date: '2023/10/13',
        company_name: 'Airble',
    },
    {
        id: 66,
        date: '2023/10/23',
        company_name: 'Canny',
    },
    {
        id: 67,
        date: '2023/10/23',
        company_name: 'Fishtank',
    },
    {
        id: 68,
        date: '2023/10/23',
        company_name: 'Roofr',
    },
];

let simpleCounter = 0;

async function main() {
    // Create admin user
    const admin = await prisma.users.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            email: 'admin@admin.com',
            password: 'admin',
            first_name: 'Admin',
            last_name: 'Admin',
        },
    });

    // Create action types
    await Promise.all(
        actionTypes.map(async (actionType) => {
            await prisma.action_types.upsert({
                where: {
                    id: ++simpleCounter,
                },
                update: {},
                create: {
                    action_type_title: actionType,
                    action_type_desc: '',
                },
            });
        })
    );

    simpleCounter = 0;
    // Create companies and jobs
    await Promise.all(
        companyNames.map(async (companyName) => {
            const company = await prisma.companies.upsert({
                where: {
                    company_name: companyName,
                },
                update: {},
                create: {
                    company_name: companyName,
                    company_website: '',
                },
            });

            // Find the associated job data
            const jobData = jobs.find(
                (job) => job.company_name === companyName
            );

            if (jobData) {
                await prisma.jobs.upsert({
                    where: {
                        id: ++simpleCounter,
                    },
                    update: {},
                    create: {
                        job_title: jobData.job_title,
                        company: {
                            connect: {
                                id: company.id,
                            },
                        },
                        job_location: '',
                        job_link: jobData.job_link,
                        resume_link: jobData.resume_link,
                        cover_link: jobData.cover_link,
                        job_work_env: 'Remote',
                        user: {
                            connect: {
                                id: admin.id,
                            },
                        },
                    },
                });
            }
        })
    );

    simpleCounter = 0;
    // Create actions and associate them with jobs
    await Promise.all(
        actions.map(async (actionData) => {
            const company = await prisma.companies.findUnique({
                where: {
                    company_name: actionData.company_name,
                },
            });

            if (company) {
                const job = await prisma.jobs.findFirst({
                    where: {
                        company: {
                            id: company.id,
                        },
                    },
                });

                if (job) {
                    await prisma.actions.upsert({
                        where: {
                            id: ++simpleCounter,
                        },
                        update: {},
                        create: {
                            created_at: new Date(actionData.date),
                            user: {
                                connect: {
                                    id: admin.id,
                                },
                            },
                            job: {
                                connect: {
                                    id: job.id,
                                },
                            },
                            action_type: {
                                connect: {
                                    id: 1,
                                },
                            },
                        },
                    });
                }
            }
        })
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
