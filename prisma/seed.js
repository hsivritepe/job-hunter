const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const companies = [
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
        company_id: 'CSC Generation',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1IMQEv80AIOrEGCYa7saInOYWVz7CdmsCtkBhQlsW5qI/edit',
        job_link:
            'https://jobs.lever.co/cscgeneration-2/bdab5d05-0a69-48e6-8e44-6526441b9ac0?source=6',
        cover_link: '',
    },
    {
        company_id: 'Amazon',
        job_title: 'SDE II Event - Vancouver, Amazon Store',
        resume_link: '',
        job_link: 'SDE II Event - Vancouver, Amazon Stores',
        cover_link: '',
    },
    {
        company_id: 'Storm2',
        job_title: 'Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1GxnkvkP6uyJXfKTX2IhMlTdItPgIQxmM8kgZbhPRM4M/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3664975100/?trackingId=&refId=&midToken=AQH_C6qXrxr9gA&midSig=2TZ4Tmo0g71GU1&',
        cover_link: '',
    },
    {
        company_id: 'Push',
        job_title: 'Full Stack Software Engineer, Integrations',
        resume_link:
            'https://docs.google.com/document/d/1ZvfgQobQjsqsZAjlJs6Gd6gMhG2ThAhyM0FLnfc-uaQ/edit',
        job_link:
            'https://app-elb.pushoperations.com/ats/job-postings/b30a1aca-dd6f-4aab-9f52-091c2d7879a0/public',
        cover_link: '',
    },
    {
        company_id: 'Commit',
        job_title: 'Full Stack Engineer [Remote - US + Canada]',
        resume_link:
            'https://docs.google.com/document/d/1nD2rclJMm_XUAVV7gRtRmaUR8PrwUj72F52Ua5v-zlE/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3681517334/?trackingId=SsngWQo1W8XMWOFm%2FMKKVw%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Slack',
        job_title:
            'Software Engineer, Backend - Slack (Multiple Levels)',
        resume_link:
            'https://docs.google.com/document/d/1y_EOAqq4usk7Qg0AqC8OQI4-X3pvJlHCo6AqU_vg3H0/edit',
        job_link:
            'https://salesforce.wd12.myworkdayjobs.com/en-US/Slack/job/Software-Engineer--Backend---Slack--Multiple-Levels-_JR207032-1',
        cover_link: '',
    },
    {
        company_id: 'MVP Talent Corp',
        job_title: 'Senior Frontend Developer',
        resume_link:
            'https://docs.google.com/document/d/1fjWkIjuQTxMteiPMAVX1GTD0tJ5EjZt0YVUcy8UzJ5w/edit#heading=h.3znysh7',
        job_link: 'Linkedin Quick apply',
        cover_link: '',
    },
    {
        company_id: 'Bounce',
        job_title: 'Senior Frontend Software Engineer',
        resume_link:
            '20230821-Hakan-Sivritepe-Bounce-Senior Frontend Software Engineer',
        job_link: 'Linkedin Quick apply',
        cover_link: '',
    },
    {
        company_id: 'Synergy Loft Inc.',
        job_title: 'Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3692308472/?refId=ByteString(length%3D16%2Cbytes%3D1a511fbc...169b6332)',
        cover_link: '',
    },
    {
        company_id: 'Sage Recruiting',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3691796005/?refId=ByteString(length%3D16%2Cbytes%3D1a511fbc...169b6332)&',
        cover_link: '',
    },
    {
        company_id: 'Busbud',
        job_title: 'Software Developer - Platform',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3667139355/?refId=940d19cc-d7e2-42b5-bcfb-c1e960be4a42&',
        cover_link: '',
    },
    {
        company_id: 'StackAdapt',
        job_title:
            'Senior Full Stack Engineer - Internal Tools & Billing',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3674768930/?refId=940d19cc-d7e2-42b5-bcfb-c1e960be4a42&',
        cover_link: '',
    },
    {
        company_id: 'Affinity.co',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1YRYsP0DC2hhxzqe93T9egoknlbwQFR8JmRQcYdyE2Qs/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3675587733/?refId=940d19cc-d7e2-42b5-bcfb-c1e960be4a42&',
        cover_link: '',
    },
    {
        company_id: 'Applied Systems',
        job_title: 'Full Stack Developer (React.js)',
        resume_link:
            'https://docs.google.com/document/d/1IkBTmm3sU5cWHQuop91xaXjn-RTMV0CWRIGEIVKbpFA/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3675950142/post-apply/similar-jobs/?context=offsite&postApplyJobId=3675950142&',
        cover_link: '',
    },
    {
        company_id: 'Zapier',
        job_title: 'Sr. Engineer, Full Stack (Identity)',
        resume_link:
            'https://docs.google.com/document/d/1ANzR1JLbXUEQ0fLIc0NeKVymr7VmUfFPbyROeXXtPAk/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3625493463/?refId=808354d4-4f39-44d9-bbbc-763ca5d97ea5&',
        cover_link: '',
    },
    {
        company_id: 'CapIntel',
        job_title: 'Senior Software Developer - Frontend',
        resume_link:
            'https://docs.google.com/document/d/1XZxBYAnmcWrMjiYv3NYRU8Mr3Fe3TKsv1sEPQI-ous8/edit#heading=h.lnxbz9',
        job_link:
            'https://www.linkedin.com/jobs/view/3689912441/?refId=808354d4-4f39-44d9-bbbc-763ca5d97ea5&',
        cover_link: '',
    },
    {
        company_id: 'Pagefreezer',
        job_title: 'Software Engineer, Fullstack',
        resume_link:
            'https://docs.google.com/document/d/140DJY-CAj0YnYyLTANsjtaSiUgcYp14Nm0sThOKYMeQ/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3693019124/?trackingId=C9lh3JaXuZW%2Bz7WuJZjgdA%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Storm4 - AgTech',
        job_title: 'Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1f6pR4noIqq5PPG-VBbDSv-bx-gBfoVgBi5X40pej8cY/edit#heading=h.lnxbz9',
        job_link:
            'https://www.linkedin.com/jobs/view/3680897384/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'NextPath Career Partners',
        job_title:
            'Full Stack Engineer – React / Next.js – REMOTE (3312)',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3681722076/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'Chime',
        job_title: 'Software Developer',
        resume_link:
            'https://docs.google.com/document/d/1gGSza6Y4PLfDvRXuj4t-T75KxJtzHRZ0DvsDT_z9824/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3674498325/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'Mosey',
        job_title: 'Senior Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1G70rin5BJAMciD-VswqV31Cbl-fVjn1Ns0eCYYhmvHU/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3696158465/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'ETM Core',
        job_title: 'Frontend Developer - Remote',
        resume_link:
            'https://docs.google.com/document/d/1i1qE7bUK8Wm5yPQaEIUTxoKX9ZL8Rv7qe1-5SWtwLEI/edit#heading=h.1fob9te',
        job_link:
            'https://www.linkedin.com/jobs/view/3695971987/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'Stan',
        job_title: 'Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1_nWfESeWnVc_i2zxUnjSLZK-BsEaWtt5ysFJug3B4co/edit',
        job_link:
            'https://stanforcreators.notion.site/Full-Stack-Software-Engineer-a5165fa3b9224d7993ed3a8942aff739',
        cover_link: '',
    },
    {
        company_id: 'Shakepay',
        job_title: 'Senior Full Stack Developer (Remote - Canada)',
        resume_link:
            '20230823-Hakan-Sivritepe-Shakepay-Senior-Full-Stack-Developer-Remote-Canada',
        job_link:
            'https://www.linkedin.com/jobs/view/3668078067/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'Basetwo AI',
        job_title: 'Software Engineer, Full Stack',
        resume_link:
            'https://docs.google.com/document/d/1BGeCm_Td8FdjaOa9ca6tyGbFTmNOTqt6gDCZnlMmg9Q/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3698167391/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'Clipboard Health',
        job_title: 'Full-Stack Software Engineer',
        resume_link:
            '20230823-Hakan-Sivritepe-Clipboard-Health-Full-Stack-Software-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3694285945/?refId=9ca08edd-0f99-4dc3-9148-1c51e629f349&',
        cover_link: '',
    },
    {
        company_id: 'Lululemon',
        job_title:
            'Senior Full Stack Engineer (Front End focus) - lululemon Studio (Hybrid, Vancouver)',
        resume_link:
            'https://docs.google.com/document/d/1wU0qMKYw0jijblW9DryejlhpGrs8ouOHlHPESM-M2ww/edit#heading=h.3znysh7',
        job_link:
            'https://www.linkedin.com/jobs/view/3676776765/?refId=9a018eca-a803-42d8-a5a7-ab84e6650e14&',
        cover_link: '',
    },
    {
        company_id: 'Sonos',
        job_title: 'Software Engineer - Content Systems',
        resume_link:
            '20230824-Hakan-Sivritepe-Software-Engineer-Content-Systems',
        job_link:
            'https://www.linkedin.com/jobs/view/3697395126/?alternateChannel=search&refId=GeM%2FkfoAhkofesGmGOlONQ%3D%3D&',
        cover_link: '',
    },
    {
        company_id:
            'BC Public Service · British Columbia, Canada (Remote)',
        job_title: 'Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link:
            'https://www.linkedin.com/jobs/view/3698445449/?trackingId=ja2PD0J2Tw4zerlhZOg7Rg%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Konnect Way',
        job_title: 'Senior React + PHP Developer',
        resume_link:
            'https://docs.google.com/document/d/12TJszmIIe32zdwDUl0WveA21Fpyajbk8qjSZ44SrcXA/edit#heading=h.3znysh7',
        job_link:
            'https://www.linkedin.com/jobs/view/3666768299/?refId=177023dc-621c-434c-a54a-d6b7f7fbca5c&',
        cover_link: '',
    },
    {
        company_id: 'd1g1t',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/1J6zr9ZbyaM20RjBEgS0ESYkXTQJL_lNhx44uTgzxNfI/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3674019087/?refId=177023dc-621c-434c-a54a-d6b7f7fbca5c&',
        cover_link: '',
    },
    {
        company_id: 'Roofr',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            '20230828-Hakan-Sivritepe-Roofr-Senior-Frontend-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3706104549/?trackingId=WYQqstRtXGdjVidRgov%2BQQ%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Gigster Network',
        job_title: 'Senior Front-End Developer',
        resume_link:
            '20230901-Hakan-Sivritepe-Gigster-Network-Senior-Front-End-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3686308419/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_id: 'Swim Recruiting',
        job_title: 'PHP Software Engineer',
        resume_link:
            '20230901-Hakan-Sivritepe-Swim-Recruiting-PHP-Software-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3690782285/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_id: 'Adobe',
        job_title: 'Senior Software Engineer',
        resume_link:
            '20230901-Hakan-Sivritepe-Adobe-Senior-Software-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3704518292/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_id: 'Pani',
        job_title: 'Full-Stack Developer',
        resume_link:
            '20230901-Hakan-Sivritepe-Pani-Full-Stack-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3701471334/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_id: 'PYMNTS',
        job_title: 'Full-Stack React/Node.js Developer',
        resume_link:
            '20230906-Hakan-Sivritepe-PYMNTS-Full-Stack React/Node.js-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3701790168/?refId=f96cb127-555f-4fb4-86f0-3a21f54744f6&',
        cover_link: '',
    },
    {
        company_id: 'Milk Moovement',
        job_title: 'Full Stack Developer II',
        resume_link:
            '20230908-Hakan-Sivritepe-Milk-Moovement-Full-Stack-Developer-II',
        job_link:
            'https://www.linkedin.com/jobs/view/3706265507/?refId=16079862-54a3-4282-ab67-0e3cc82ddbf0&',
        cover_link: '',
    },
    {
        company_id: 'Klue',
        job_title: 'Intermediate Frontend Engineer ',
        resume_link:
            '20230908-Hakan-Sivritepe-Klue-Intermediate-Frontend-Engineer ',
        job_link:
            'https://www.linkedin.com/jobs/view/3700024349/?refId=16079862-54a3-4282-ab67-0e3cc82ddbf0&',
        cover_link: '',
    },
    {
        company_id: "Let's Roam",
        job_title: 'Junior & Mid-Level Full Stack Developer',
        resume_link:
            '20230911-Hakan-Sivritepe-Lets-Roam-Junior-Mid-Full-Stack',
        job_link:
            'https://www.linkedin.com/jobs/view/3689652497/?trackingId=hWV%2Fm2OMQ1eeRTrK4hALGQ%3D%3D&refId=UzRzaxpvRLOGVqcTGu4vcQ%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Pixieset',
        job_title: 'Software Developer, Full Stack',
        resume_link: '20230911-Hakan-Sivritepe-Pixieset-Full-Stack',
        job_link:
            'https://pixieset.breezy.hr/p/c8abb7691da2-software-developer-full-stack',
        cover_link: '',
    },
    {
        company_id: 'Pixieset',
        job_title: 'Software Developer, Full Stack (Growth)',
        resume_link: '20230911-Hakan-Sivritepe-Pixieset-Full-Stack',
        job_link:
            'https://pixieset.breezy.hr/p/047d313cd6f7-software-developer-full-stack-growth',
        cover_link: '',
    },
    {
        company_id: 'Shakepay',
        job_title:
            'Intermediate Full Stack Developer (Remote - Canada)',
        resume_link:
            '20230911-Hakan-Sivritepe-Shakepay-Intermediate-Full-Stack-Developer-Remote-Canada',
        job_link:
            'https://www.linkedin.com/jobs/view/3718410689/?alternateChannel=search&refId=4Tdbz%2FoYqxlIDjbvaB6sSg%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Pattern Learning AI',
        job_title: 'Entry-Level React Developer - US/Canada',
        resume_link:
            '20230912-Hakan-Sivritepe-Pattern-Learning-Entry-Level-React-Dev',
        job_link:
            'https://www.linkedin.com/jobs/view/3718050458/?refId=99c99081-83fb-4893-ab1b-8d704d936523&',
        cover_link: '',
    },
    {
        company_id: 'Asana',
        job_title: 'Software Engineer, Product',
        resume_link: 'Easy Apply - Linkedin with Master resume',
        job_link:
            'https://www.linkedin.com/jobs/view/3715546445/?refId=99c99081-83fb-4893-ab1b-8d704d936523&',
        cover_link: '',
    },
    {
        company_id: 'Clevertech',
        job_title: 'Senior Full Stack Engineer - Javascript',
        resume_link: '',
        job_link: '',
        cover_link: '',
    },
    {
        company_id: 'Randstad',
        job_title: 'Front End x 2 - Remote - 4 months',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3712104136/?trackingId=5h1E%2B26%2Fx22BRAuGarxyrw%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Fullscript',
        job_title: 'Javascript Engineer II',
        resume_link:
            '20230914-Hakan-Sivritepe-Fullscript-JS-Engineer-II',
        job_link:
            'https://www.linkedin.com/jobs/view/3712103155/?trackingId=f9sYUN92D%2F2PZZFHb2QDaw%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Coconut',
        job_title: 'Senior Developer',
        resume_link:
            '20230918-Hakan-Sivritepe-Coconut-Senior-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3695489352/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_id: 'RainBarrel',
        job_title: 'Senior Full-Stack Developer',
        resume_link:
            '20230921-Hakan-Sivritepe-RainBarrel-Senior-Full-Stack',
        job_link:
            'https://loknowcareers.applytojobs.ca/engineering+and+technology/24909',
        cover_link:
            'https://docs.google.com/document/d/1cTyKv_HtpPw0-VTlZO_F2WVcarDKjKn72bnMiUIPccU/edit',
    },
    {
        company_id: 'Fortinet',
        job_title: 'Web Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-Fortinet-Web-Developer',
        job_link: '',
        cover_link: '',
    },
    {
        company_id: 'The Conference Board of Canada',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            '20230929-Hakan-Sivritepe-Conference-Board-Canada-Senior-Web',
        job_link:
            'https://www.linkedin.com/jobs/view/3729800594/?refId=ByteString(length%3D16%2Cbytes%3D801f910a...d5700709)&',
        cover_link: '',
    },
    {
        company_id: 'SimplyPHP',
        job_title: 'Web Application Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-SimplyPHP-Web-Application-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3726280868/?refId=3f64890a-9b7f-436e-bdfd-85df78bd000f&',
        cover_link: '',
    },
    {
        company_id: 'Craver',
        job_title: 'Intermediate Frontend Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-Craver-Intermediate-Frontend-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3726533471/?refId=ByteString(length%3D16%2Cbytes%3D6a0e5b19...676f51a4)&',
        cover_link: '',
    },
    {
        company_id: 'Super.com',
        job_title:
            'Intermediate Software Engineer (Full Stack) (Remote)',
        resume_link:
            '20230929-Hakan-Sivritepe-Super-Intermediate-Software-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3726202995/?refId=ByteString(length%3D16%2Cbytes%3Df8fee512...3c3f1d6b)&',
        cover_link: '',
    },
    {
        company_id: 'SimplyPHP',
        job_title: 'PHP Developer',
        resume_link:
            '20230929-Hakan-Sivritepe-SimplyPHP-Web-Application-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3727230094/?alternateChannel=search&refId=DdPHfKS1WwTrloWRF%2FQP%2Bg%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'PolicyMe',
        job_title: 'Software Engineer - Fullstack',
        resume_link:
            'https://www.linkedin.com/jobs/view/3727222280/?refId=da8434e9-6006-430e-b50c-b45cdf7cb65d&',
        cover_link: '',
    },
    {
        company_id: 'BrainStation',
        job_title: 'Web Developer - Educator',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://brainstation.io/careers/jobs/educator-web-developer_5763039003',
        cover_link:
            '20231005-Hakan-Sivritepe-BrainStation-Educator-Cover',
    },
    {
        company_id: 'Jungle Scout',
        job_title: 'Software Engineer',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://www.linkedin.com/jobs/view/3712198245/?refId=dc7bf84e-4ab9-4f9f-96ea-72829b168296&',
        cover_link: '',
    },
    {
        company_id: 'HustleWing',
        job_title: 'Web Developer',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://www.linkedin.com/jobs/view/3735228144/?refId=ByteString(length%3D16%2Cbytes%3D65fe73fd...ea0e4254)&',
        cover_link: '',
    },
    {
        company_id: 'eCapital Corp.',
        job_title: 'Full-Stack Software Developer',
        resume_link:
            '20231008-Hakan-Sivritepe-eCapitalCorp-Full-Stack-Software-Developer',
        job_link:
            'https://www.linkedin.com/jobs/view/3729786794/?refId=ByteString(length%3D16%2Cbytes%3D0908c82f...0daa04b4)&',
        cover_link: '',
    },
    {
        company_id: 'Cedar',
        job_title: 'Software Engineer (Launch)',
        resume_link: '20230929-Hakan-Sivritepe-',
        job_link:
            'https://www.linkedin.com/jobs/view/3734045040/?refId=ByteString(length%3D16%2Cbytes%3D0add19db...bef3d719)&',
        cover_link: '',
    },
    {
        company_id: 'Binance.us',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            '20231012-Hakan-Sivritepe-Binance-Senior-Web-Engineer',
        job_link:
            'https://www.linkedin.com/jobs/view/3733303014/?alternateChannel=search&refId=IK59dT42JsGdUp8i%2B%2BNCwA%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Klue',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            '20230908-Hakan-Sivritepe-Klue-Intermediate-Frontend-Engineer ',
        job_link:
            'https://www.linkedin.com/jobs/view/3679654545/?alternateChannel=search&refId=MPSkZLrKDkJSWsGO%2BxNvag%3D%3D&',
        cover_link: '',
    },
    {
        company_id: 'Airble',
        job_title: 'Software Developer',
        resume_link:
            '20231013-Hakan-Sivritepe-Airble-Softwware-Developer',
        job_link:
            'https://jobs.vantechjournal.com/software-developer-3439ae3c2a07',
        cover_link: '',
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

    // Create companies
    companies.map(async (company) => {
        const companyItem = await prisma.companies.upsert({
            where: {
                id: ++simpleCounter,
            },
            update: {},
            create: {
                company_name: company,
                company_website: '',
            },
        });
    });
    simpleCounter = 0;

    // Create action types
    actionTypes.map(async (actionType) => {
        const actionTypeItem = await prisma.action_types.upsert({
            where: {
                id: ++simpleCounter,
            },
            update: {},
            create: {
                action_type_title: actionType,
                action_type_desc: '',
            },
        });
    });

    simpleCounter = 0;
    // Create jobs
    jobs.map(async (job) => {
        const jobItem = await prisma.jobs.upsert({
            where: {
                id: ++simpleCounter,
            },
            update: {},
            create: {
                job_title: job.job_title,
                company_id: simpleCounter,
                job_location: '',
                job_link: job.job_link,
                resume_link: job.resume_link,
                cover_link: job.cover_link,
                job_work_env: 'Remote',
            },
        });
    });
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
