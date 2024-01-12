const { v4: uuidv4 } = require('uuid');
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
            'https://docs.google.com/document/d/1DKEAhFzXXC_2TKsQzWonAuhaXWuh6kYeHQD4kKEfcnY/edit',
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
            'https://docs.google.com/document/d/1cwHIPCHfbgFnHUkcfNuN1VzQKp26hGFdEImmk0aRa1A/edit',
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
            'https://docs.google.com/document/d/1vPECtxA1ok8klpm8aUbQAUkewllYq5wkit8QU1MvJC8/edit',
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
            'https://docs.google.com/document/d/1TFvzuK6gqTPc8lGAQ5Rvm1WQB3cqezrMGRVHo3VYyJQ/edit',
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
            'https://docs.google.com/document/d/19OjTxUYlmW9dULfyY4SuiCLFGtkLPOmVYlboPwQ-zfc/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3706104549/?trackingId=WYQqstRtXGdjVidRgov%2BQQ%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Gigster Network',
        job_title: 'Senior Front-End Developer',
        resume_link:
            'https://docs.google.com/document/d/1hVSewcgMP8wE5bxKmG37oU78E0LQwhH4aiK55Q6cL6g/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3686308419/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'Swim Recruiting',
        job_title: 'PHP Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1_k5EVuEBlXm4yrJQmfvHDMxiV6DpmurMYPHRtfRbRDI/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3690782285/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'Adobe',
        job_title: 'Senior Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1m3slPBa57DQYQJ-u4MishvixcHvSCTrxOXCizbQtXdE/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3704518292/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'Pani',
        job_title: 'Full-Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1l3c0WP5UPJySqbY3UH7AnRVwIe6JIU9kkpaFk5txl0M/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3701471334/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'PYMNTS',
        job_title: 'Full-Stack React/Node.js Developer',
        resume_link:
            'https://docs.google.com/document/d/1OsVXEWJWSFU8J8IW48DRwdv5EWYSzCi7qJsQ1laxdTQ/edit#heading=h.17dp8vu',
        job_link:
            'https://www.linkedin.com/jobs/view/3701790168/?refId=f96cb127-555f-4fb4-86f0-3a21f54744f6&',
        cover_link: '',
    },
    {
        company_name: 'Milk Moovement',
        job_title: 'Full Stack Developer II',
        resume_link:
            'https://docs.google.com/document/d/1T8-4FhVaT9e4rzck6HUI9ChdQyTuELXO5EmTgNywMg0/edit#heading=h.1fob9te',
        job_link:
            'https://www.linkedin.com/jobs/view/3706265507/?refId=16079862-54a3-4282-ab67-0e3cc82ddbf0&',
        cover_link: '',
    },
    {
        company_name: 'Klue',
        job_title: 'Intermediate Frontend Engineer ',
        resume_link:
            'https://docs.google.com/document/d/1DKFYV9LR34OwQ5l-eul7M_EQEzBuUdOzUtRj8nq-drY/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3700024349/?refId=16079862-54a3-4282-ab67-0e3cc82ddbf0&',
        cover_link: '',
    },
    {
        company_name: "Let's Roam",
        job_title: 'Junior & Mid-Level Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1IqF--kqnzQCPWtcKTQljkPFNDV-HjzzttZwODJHKAzA/edit#heading=h.aqqgyf1jcetq',
        job_link:
            'https://www.linkedin.com/jobs/view/3689652497/?trackingId=hWV%2Fm2OMQ1eeRTrK4hALGQ%3D%3D&refId=UzRzaxpvRLOGVqcTGu4vcQ%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Pixieset',
        job_title: 'Software Developer, Full Stack',
        resume_link:
            'https://docs.google.com/document/d/1VhKobNwy3EmVs1aDVa-bhvFsiuaySU8NGIIZBAWS9Qo/edit',
        job_link:
            'https://pixieset.breezy.hr/p/c8abb7691da2-software-developer-full-stack',
        cover_link: '',
    },
    {
        company_name: 'Pixieset',
        job_title: 'Software Developer, Full Stack (Growth)',
        resume_link:
            'https://docs.google.com/document/d/1VhKobNwy3EmVs1aDVa-bhvFsiuaySU8NGIIZBAWS9Qo/edit',
        job_link:
            'https://pixieset.breezy.hr/p/047d313cd6f7-software-developer-full-stack-growth',
        cover_link: '',
    },
    {
        company_name: 'Shakepay',
        job_title:
            'Intermediate Full Stack Developer (Remote - Canada)',
        resume_link:
            'https://docs.google.com/document/d/11tZ7McxQ7JX4s9MkBTmzz28LwgR0CYM2H8Xc_XQWHJ4/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3718410689/?alternateChannel=search&refId=4Tdbz%2FoYqxlIDjbvaB6sSg%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Pattern Learning AI',
        job_title: 'Entry-Level React Developer - US/Canada',
        resume_link:
            'https://docs.google.com/document/d/1HLujYiV4G6GgtBNHuVBS8HPCqMHuMrEUCeRcFkp2B9g/edit',
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
            'https://docs.google.com/document/d/1Qe6JW5TMHfdCr6-DMN0SYLPnMxYgwc0j0GqDwKZhIVk/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3712103155/?trackingId=f9sYUN92D%2F2PZZFHb2QDaw%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Coconut',
        job_title: 'Senior Developer',
        resume_link:
            'https://docs.google.com/document/d/1CylxZDjhgVcA8duzPA9g74J0UuWmivt6Y9k5MP2-BvM/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3695489352/?refId=77ff87b3-6ac2-4173-8fd2-e16cc88c3a2f&',
        cover_link: '',
    },
    {
        company_name: 'RainBarrel',
        job_title: 'Senior Full-Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1AM6JpR_FjSDX3-7koQZJ54fEV3kOlDuysKkhnnxztIU/edit',
        job_link:
            'https://loknowcareers.applytojobs.ca/engineering+and+technology/24909',
        cover_link:
            'https://docs.google.com/document/d/1cTyKv_HtpPw0-VTlZO_F2WVcarDKjKn72bnMiUIPccU/edit',
    },
    {
        company_name: 'Fortinet',
        job_title: 'Web Developer',
        resume_link:
            'https://docs.google.com/document/d/1AM6JpR_FjSDX3-7koQZJ54fEV3kOlDuysKkhnnxztIU/edit',
        job_link: '',
        cover_link: '',
    },
    {
        company_name: 'The Conference Board of Canada',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            'https://docs.google.com/document/d/1qQ5PyrR5wh6dtsM2W669skkii6iJ7r6zfd5lyKevJZA/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3729800594/?refId=ByteString(length%3D16%2Cbytes%3D801f910a...d5700709)&',
        cover_link: '',
    },
    {
        company_name: 'SimplyPHP',
        job_title: 'Web Application Developer',
        resume_link:
            'https://docs.google.com/document/d/1JmKY176GWOhCEjYe7ZfM4YspCcRqUofN2dJGaERz4fU/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3726280868/?refId=3f64890a-9b7f-436e-bdfd-85df78bd000f&',
        cover_link: '',
    },
    {
        company_name: 'Craver',
        job_title: 'Intermediate Frontend Developer',
        resume_link:
            'https://docs.google.com/document/d/1QhqFqvA3FJam6pC0JkW6Pha1LsQ229Q3FpL0s7Vw9rs/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3726533471/?refId=ByteString(length%3D16%2Cbytes%3D6a0e5b19...676f51a4)&',
        cover_link: '',
    },
    {
        company_name: 'Super.com',
        job_title:
            'Intermediate Software Engineer (Full Stack) (Remote)',
        resume_link:
            'https://docs.google.com/document/d/169g8VMefgIlft_iYZpCJfVInHYH7EvqQwhOmk6eNsic/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3726202995/?refId=ByteString(length%3D16%2Cbytes%3Df8fee512...3c3f1d6b)&',
        cover_link: '',
    },
    {
        company_name: 'SimplyPHP',
        job_title: 'PHP Developer',
        resume_link:
            'https://docs.google.com/document/d/1JmKY176GWOhCEjYe7ZfM4YspCcRqUofN2dJGaERz4fU/edit',
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
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://brainstation.io/careers/jobs/educator-web-developer_5763039003',
        cover_link:
            'https://docs.google.com/document/d/10277CJtpVAiv20JMZ0n2OllFiW3n8rb_E8jVht-IbEw/edit',
    },
    {
        company_name: 'Jungle Scout',
        job_title: 'Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3712198245/?refId=dc7bf84e-4ab9-4f9f-96ea-72829b168296&',
        cover_link: '',
    },
    {
        company_name: 'HustleWing',
        job_title: 'Web Developer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3735228144/?refId=ByteString(length%3D16%2Cbytes%3D65fe73fd...ea0e4254)&',
        cover_link: '',
    },
    {
        company_name: 'eCapital Corp.',
        job_title: 'Full-Stack Software Developer',
        resume_link:
            'https://docs.google.com/document/d/1ja-ZUwe9QDFOn0sshAVSRK2XMoN9fsVv2g2lrZubJo4/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3729786794/?refId=ByteString(length%3D16%2Cbytes%3D0908c82f...0daa04b4)&',
        cover_link: '',
    },
    {
        company_name: 'Cedar',
        job_title: 'Software Engineer (Launch)',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3734045040/?refId=ByteString(length%3D16%2Cbytes%3D0add19db...bef3d719)&',
        cover_link: '',
    },
    {
        company_name: 'Binance.us',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            'https://docs.google.com/document/d/1PgOJuQ8Kf0EJ2syicbWz9xDXG6DYjKRJpdt8GoATppI/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3733303014/?alternateChannel=search&refId=IK59dT42JsGdUp8i%2B%2BNCwA%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Klue',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/1DKFYV9LR34OwQ5l-eul7M_EQEzBuUdOzUtRj8nq-drY/edit',
        job_link:
            'https://www.linkedin.com/jobs/view/3679654545/?alternateChannel=search&refId=MPSkZLrKDkJSWsGO%2BxNvag%3D%3D&',
        cover_link: '',
    },
    {
        company_name: 'Airble',
        job_title: 'Software Developer',
        resume_link:
            'https://docs.google.com/document/d/1gY9rf9FldwNkuLmu8Hfx-GZ-a7cVZq68qJEnrHxoUeI/edit',
        job_link:
            'https://jobs.vantechjournal.com/software-developer-3439ae3c2a07',
        cover_link: '',
    },

    {
        company_name: 'Canny',
        job_title: 'Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/10YDtKvbs4_cTIpR_xj3MCNIj45Q8v90w1zBpdEE9G7Q/edit#heading=h.lnxbz9',
        job_link: 'https://www.linkedin.com/jobs/view/3744539901',
        cover_link:
            'https://docs.google.com/document/d/1y5uYESnWEugCvUL5p5YaydhtzuMrsC1FvGAK91j29ww/edit',
    },
    {
        company_name: 'Fishtank',
        job_title: 'Front-End Developer',
        resume_link:
            'https://docs.google.com/document/d/1k--ozg39Ei9jnsuwTkKR3rLqFv5Jhd32Xm86xGtAYGU/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3740404336',
        cover_link: '',
    },
    {
        company_name: 'Roofr',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/1kUnMDbyY7246MSS3Gdoenvo8Z-ghpoVSJXTtGVqAgYE/edit',
        job_link: 'https://www.linkedin.com/jobs/view/37374812890',
        cover_link:
            'https://docs.google.com/document/d/1tfTo1fWZSqEGS4EV74bh8IoH3w1SodXP1hGR9zmYSoc/edit',
    },
    {
        company_name: 'Hootsuite',
        job_title: 'Intermediate Software Developer, Full Stack',
        resume_link:
            'https://docs.google.com/document/d/1Sba_KdicGOghFBXGO2aQ00rY2dueNs7PCZYd53Qx_48/edit',
        job_link: 'https://careers.hootsuite.com/job/?gh_jid=5155303',
        cover_link:
            'https://docs.google.com/document/d/1eULrqVisj4pzqfJxbO_UsapSjFGlQtQKNcodjkc5hkI/edit',
    },
    {
        company_name: 'Aquanow',
        job_title: 'Intermediate Fronted Javascript Developer',
        resume_link:
            'https://docs.google.com/document/d/1mGNu41h3y25u3QlFdlyjrOpktoShgTKp1uQmfQL3968/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3747519488/',
        cover_link: '',
    },
    {
        company_name: 'Tucows',
        job_title: 'Sr Software Engineer - Domains',
        resume_link:
            'https://docs.google.com/document/d/19vN6yHMRGCQTjckihJciVEnAh78WfsUBDlB2TEuYnjg/edit#heading=h.3znysh7',
        job_link:
            'https://www.linkedin.com/jobs/view/3749742392/?alternateChannel=search&refId=t%2BKZbo%2BhkvhhnK0qNMLfkg%3D%3D&',
        cover_link:
            'https://docs.google.com/document/d/1tfTo1fWZSqEGS4EV74bh8IoH3w1SodXP1hGR9zmYSoc/edit',
    },
    {
        company_name: 'ResearchGate',
        job_title: 'Senior Full-Stack Engineer React & PHP',
        resume_link:
            'https://docs.google.com/document/d/1GiHUPezBa_UvOwlOqqLMAkLDuow1tn6yiF5LggEZCAI/edit',
        job_link:
            'https://jobs.lever.co/researchgate/68129ddc-15ab-4999-bfab-0a6cf5ebbfd7/apply',
        cover_link:
            'https://docs.google.com/document/d/10OknjvMnW-Cr56QS523ry_YAO4_YNYRI5_E80IjD8R0/edit',
    },
    {
        company_name: 'Caddie',
        job_title: 'Senior Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1F7S-AMCmxfGzQF6yLqAxLqBudXCg5pAUKMpwh9UslVY/edit',
        job_link:
            'https://www.ycombinator.com/companies/caddie-ai/jobs/DZmfnRk-senior-full-stack-software-engineer?utm_source=syn_li',
        cover_link: '',
    },
    {
        company_name: 'Webisoft',
        job_title: 'ReactJS Developer',
        resume_link: 'Latest resume',
        job_link: 'https://www.linkedin.com/jobs/view/3750356791',
        cover_link: '',
    },
    {
        company_name: 'Gigster Network',
        job_title: 'Senior Back-End Developer',
        resume_link:
            'https://docs.google.com/document/d/1hHP1fuHsuiUs-12HejAwg7y-hpJ_p0zKhSmrFHzGfEc/edit#heading=h.1fob9te',
        job_link: 'https://www.linkedin.com/jobs/view/3759808911/',
        cover_link: '',
    },
    {
        company_name: 'CORADIX',
        job_title: 'Senior Web Developer - Government of Canada',
        resume_link:
            'https://docs.google.com/document/d/10U4lo3zNSGb6d4cwJQ7lA-ZBcWJh40o9_g-yUnt3VlA/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3761113787/',
        cover_link: '',
    },
    {
        company_name: 'Just Appraised',
        job_title: 'Frontend Developer',
        resume_link:
            'https://docs.google.com/document/d/1ZvzTlfWpqmDW1xOGhgzxyLg0dGh0rn4IiNYOM3bEdz4/edit#heading=h.lnxbz9',
        job_link: 'https://www.linkedin.com/jobs/view/3759083636/',
        cover_link: '',
    },
    {
        company_name: 'Air Apps',
        job_title: 'Backend Developer - Join Our Talent Pool!',
        resume_link: 'Latest resume',
        job_link: 'https://www.linkedin.com/jobs/view/3759307719',
        cover_link: '',
    },
    {
        company_name: 'UniUni',
        job_title: 'Senior Software Developer',
        resume_link: 'Latest resume',
        job_link:
            'https://ca.indeed.com/viewjob?from=app-tracker-post_apply-appcard&hl=en&jk=a54ef8e6c5f3db0b&tk=1heqjd880ih73800',
        cover_link: '',
    },
    {
        company_name: 'Konect',
        job_title: 'Backend Developer (PHP & Node.js)',
        resume_link:
            'https://docs.google.com/document/d/1Je1SGxrSsndsHMgc4TY_vycHfa6tYcJsK8qo_h0MXr0/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3756540894D',
        cover_link: '',
    },
    {
        company_name: 'Loopio',
        job_title: 'Software Developer (Core Experience)',
        resume_link:
            'https://docs.google.com/document/d/1BHFi9lCjTnCnhA6kjNnThsgf4EsKPxUjdbT3i11HffE/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3721913457D',
        cover_link: '',
    },
    {
        company_name: 'Fable',
        job_title: 'Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1OBrKW5rFUshIordDpg-ajpS3kn0muoBc2gBhXutmMag/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3737610422D',
        cover_link: '',
    },
    {
        company_name: 'Salesforce',
        job_title:
            'Full-Stack Software Engineer – Application Development',
        resume_link:
            'https://docs.google.com/document/d/1Yuo9_o6oT8nNDU_BrMG2PZe0wU8HvsJZwdSnvu9yv7s/edit#heading=h.1fob9te',
        job_link: 'https://www.linkedin.com/jobs/view/3707152946D',
        cover_link:
            'https://docs.google.com/document/d/10OknjvMnW-Cr56QS523ry_YAO4_YNYRI5_E80IjD8R0/edit',
    },
    {
        company_name: 'iContact',
        job_title:
            'Senior Backend / Fullstack Software Engineer - iContact',
        resume_link:
            'https://docs.google.com/document/d/1lh0_F4e246VWhEBSLYh74CHodlm82e7LkAU8Ega_f3Q/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3598861942',
        cover_link:
            'https://docs.google.com/document/d/1Yvv0H_lBgVF8RAs3321jl6bND3FB4ObQOcGHkrrexqA/edit',
    },
    {
        company_name: 'Dapper Labs',
        job_title: 'Senior Frontend Engineer I (Vancouver)',
        resume_link:
            'https://docs.google.com/document/d/1OOZ2MMzlmnls5PzSKQtVvZYJUoWq6SPPwIwBcyDxYLU/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3757054802/',
        cover_link: '',
    },
];

const actions = [
    {
        id: 1,
        date: '2023-07-27T07:06:54.321Z',
        company_name: 'CSC Generation',
    },
    {
        id: 2,
        date: '2023-07-25T07:06:54.321Z',
        company_name: 'Amazon',
    },
    {
        id: 3,
        date: '2023-08-01T07:06:54.321Z',
        company_name: 'Storm2',
    },
    {
        id: 4,
        date: '2023-08-04T07:06:54.321Z',
        company_name: 'Push',
    },
    {
        id: 5,
        date: '2023-08-05T07:06:54.321Z',
        company_name: 'Commit',
    },
    {
        id: 6,
        date: '2023-08-05T07:06:54.321Z',
        company_name: 'Slack',
    },
    {
        id: 7,
        date: '2023-08-21T07:06:54.321Z',
        company_name: 'MVP Talent Corp',
    },
    {
        id: 8,
        date: '2023-08-21T07:06:54.321Z',
        company_name: 'Bounce',
    },
    {
        id: 9,
        date: '2023-08-21T07:06:54.321Z',
        company_name: 'Synergy Loft Inc.',
    },
    {
        id: 10,
        date: '2023-08-21T07:06:54.321Z',
        company_name: 'Sage Recruiting',
    },
    {
        id: 11,
        date: '2023-08-22T07:06:54.321Z',
        company_name: 'Busbud',
    },
    {
        id: 12,
        date: '2023-08-22T07:06:54.321Z',
        company_name: 'StackAdapt',
    },
    {
        id: 13,
        date: '2023-08-22T07:06:54.321Z',
        company_name: 'Affinity.co',
    },
    {
        id: 14,
        date: '2023-08-22T07:06:54.321Z',
        company_name: 'Applied Systems',
    },
    {
        id: 15,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Zapier',
    },
    {
        id: 16,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'CapIntel',
    },
    {
        id: 17,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Pagefreezer',
    },
    {
        id: 18,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Storm4 - AgTech',
    },
    {
        id: 19,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'NextPath Career Partners',
    },
    {
        id: 20,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Chime',
    },
    {
        id: 21,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Mosey',
    },
    {
        id: 22,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'ETM Core',
    },
    {
        id: 23,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Stan',
    },
    {
        id: 24,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Shakepay',
    },
    {
        id: 25,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Basetwo AI',
    },
    {
        id: 26,
        date: '2023-08-23T07:06:54.321Z',
        company_name: 'Clipboard Health',
    },
    {
        id: 27,
        date: '2023-08-24T07:06:54.321Z',
        company_name: 'Lululemon',
    },
    {
        id: 28,
        date: '2023-08-24T07:06:54.321Z',
        company_name: 'Sonos',
    },
    {
        id: 29,
        date: '2023-08-27T07:06:54.321Z',
        company_name: '(Remote)',
    },
    {
        id: 30,
        date: '2023-08-28T07:06:54.321Z',
        company_name: 'Konnect Way',
    },
    {
        id: 31,
        date: '2023-08-28T07:06:54.321Z',
        company_name: 'd1g1t',
    },
    {
        id: 32,
        date: '2023-09-01T07:06:54.321Z',
        company_name: 'Roofr',
    },
    {
        id: 33,
        date: '2023-09-01T07:06:54.321Z',
        company_name: 'Gigster Network',
    },
    {
        id: 34,
        date: '2023-09-01T07:06:54.321Z',
        company_name: 'Swim Recruiting',
    },
    {
        id: 35,
        date: '2023-09-01T07:06:54.321Z',
        company_name: '13Adobe',
    },
    {
        id: 36,
        date: '2023-09-01T07:06:54.321Z',
        company_name: 'Pani',
    },
    {
        id: 37,
        date: '2023-09-06T07:06:54.321Z',
        company_name: 'PYMNTS',
    },
    {
        id: 38,
        date: '2023-09-08T07:06:54.321Z',
        company_name: 'Milk Moovement',
    },
    {
        id: 39,
        date: '2023-09-11T07:06:54.321Z',
        company_name: '20Klue',
    },
    {
        id: 40,
        date: '2023-09-11T07:06:54.321Z',
        company_name: "Let's Roam",
    },
    {
        id: 41,
        date: '2023-09-11T07:06:54.321Z',
        company_name: 'Pixieset',
    },
    {
        id: 42,
        date: '2023-09-11T07:06:54.321Z',
        company_name: 'Pixieset',
    },
    {
        id: 43,
        date: '2023-09-11T07:06:54.321Z',
        company_name: 'Shakepay',
    },
    {
        id: 44,
        date: '2023-09-12T07:06:54.321Z',
        company_name: 'Pattern Learning AI',
    },
    {
        id: 45,
        date: '2023-09-12T07:06:54.321Z',
        company_name: 'Asana',
    },
    {
        id: 46,
        date: '2023-09-12T07:06:54.321Z',
        company_name: '20Clevertech',
    },
    {
        id: 47,
        date: '2023-09-14T07:06:54.321Z',
        company_name: 'Randstad',
    },
    {
        id: 48,
        date: '2023-09-14T07:06:54.321Z',
        company_name: '16Fullscript',
    },
    {
        id: 49,
        date: '2023-09-18T07:06:54.321Z',
        company_name: '25Coconut',
    },
    {
        id: 50,
        date: '2023-09-21T07:06:54.321Z',
        company_name: 'RainBarrel',
    },
    {
        id: 51,
        date: '2023-09-29T07:06:54.321Z',
        company_name: 'Fortinet',
    },
    {
        id: 52,
        date: '2023-09-29T07:06:54.321Z',
        company_name: 'The Conference Board of Canada',
    },
    {
        id: 53,
        date: '2023-09-29T07:06:54.321Z',
        company_name: '02SimplyPHP',
    },
    {
        id: 54,
        date: '2023-09-29T07:06:54.321Z',
        company_name: 'Craver',
    },
    {
        id: 55,
        date: '2023-09-29T07:06:54.321Z',
        company_name: 'Super.com',
    },
    {
        id: 56,
        date: '2023-10-02T07:06:54.321Z',
        company_name: '05SimplyPHP',
    },
    {
        id: 57,
        date: '2023-10-02T07:06:54.321Z',
        company_name: 'PolicyMe',
    },
    {
        id: 58,
        date: '2023-10-05T07:06:54.321Z',
        company_name: 'BrainStation',
    },
    {
        id: 59,
        date: '2023-10-06T07:06:54.321Z',
        company_name: 'Jungle Scout',
    },
    {
        id: 60,
        date: '2023-10-07T07:06:54.321Z',
        company_name: 'HustleWing',
    },
    {
        id: 61,
        date: '2023-10-07T07:06:54.321Z',
        company_name: 'eCapital Corp.',
    },
    {
        id: 62,
        date: '2023-10-07T07:06:54.321Z',
        company_name: '11Cedar',
    },
    {
        id: 63,
        date: '2023-10-12T07:06:54.321Z',
        company_name: 'Binance.us',
    },
    {
        id: 64,
        date: '2023-10-13T07:06:54.321Z',
        company_name: 'Klue',
    },
    {
        id: 65,
        date: '2023-10-13T07:06:54.321Z',
        company_name: 'Airble',
    },
    {
        id: 66,
        date: '2023-10-23T07:06:54.321Z',
        company_name: 'Canny',
    },
    {
        id: 67,
        date: '2023-10-23T07:06:54.321Z',
        company_name: 'Fishtank',
    },
    {
        id: 69,
        date: '2023-11-01T07:06:54.321Z',
        company_name: 'Aquanow',
    },
    {
        id: 70,
        date: '2023-10-31T07:06:54.321Z',
        company_name: 'Hootsuite',
    },
    {
        id: 71,
        date: '2023-11-01T07:06:54.321Z',
        company_name: 'Tucows',
    },
    {
        id: 72,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'ResearchGate',
    },
    {
        id: 73,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'Caddie',
    },
    {
        id: 74,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'Webisoft',
    },
    {
        id: 75,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'Gigster Network',
    },
    {
        id: 76,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'CORADIX',
    },
    {
        id: 77,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'Just Appraised',
    },
    {
        id: 78,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'Air Apps',
    },
    {
        id: 79,
        date: '2023-11-09T07:06:54.321Z',
        company_name: 'UniUni',
    },
    {
        id: 80,
        date: '2023-11-10T07:06:54.321Z',
        company_name: 'Konect',
    },
    {
        id: 81,
        date: '2023-11-10T07:06:54.321Z',
        company_name: 'Loopio',
    },
    {
        id: 82,
        date: '2023-11-10T07:06:54.321Z',
        company_name: 'Fable',
    },
    {
        id: 83,
        date: '2023-11-10T07:06:54.321Z',
        company_name: 'Salesforce',
    },
    {
        id: 84,
        date: '2023-11-13T07:06:54.321Z',
        company_name: 'iContact',
    },
    {
        id: 85,
        date: '2023-11-14T07:06:54.321Z',
        company_name: 'Dapper Labs',
    },
];

const newDesignData = [
    {
        id: 1,
        company_id: 1,
        created_at: '2023-07-27T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'CSC Generation',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1IMQEv80AIOrEGCYa7saInOYWVz7CdmsCtkBhQlsW5qI/edit',
        job_link:
            'https://jobs.lever.co/cscgeneration-2/bdab5d05-0a69-48e6-8e44-6526441b9ac0?source=6',
        cover_link: '',
    },
    {
        id: 2,
        company_id: 2,
        created_at: '2023-07-25T07:06:54.321Z',
        response_date: '2023-08-01T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Amazon',
        job_title: 'SDE II Event - Vancouver, Amazon Store',
        resume_link: '',
        job_link: 'SDE II Event - Vancouver, Amazon Stores',
        cover_link: '',
    },
    {
        id: 3,
        company_id: 3,
        created_at: '2023-08-01T07:06:54.321Z',
        response_date: '',
        follow_up_date: '2023-09-26T07:06:54.321Z',
        company_name: 'Storm2',
        job_title: 'Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1GxnkvkP6uyJXfKTX2IhMlTdItPgIQxmM8kgZbhPRM4M/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3664975100/',
        cover_link: '',
    },
    {
        id: 4,
        company_id: 4,
        created_at: '2023-08-04T07:06:54.321Z',
        response_date: '2023-08-07T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Push',
        job_title: 'Full Stack Software Engineer, Integrations',
        resume_link:
            'https://docs.google.com/document/d/1ZvfgQobQjsqsZAjlJs6Gd6gMhG2ThAhyM0FLnfc-uaQ/edit',
        job_link:
            'https://app-elb.pushoperations.com/ats/job-postings/b30a1aca-dd6f-4aab-9f52-091c2d7879a0/public',
        cover_link: '',
    },
    {
        id: 5,
        company_id: 5,
        created_at: '2023-08-05T07:06:54.321Z',
        response_date: '',
        follow_up_date: '2023-09-26T07:06:54.321Z',
        company_name: 'Commit',
        job_title: 'Full Stack Engineer [Remote - US + Canada]',
        resume_link:
            'https://docs.google.com/document/d/1nD2rclJMm_XUAVV7gRtRmaUR8PrwUj72F52Ua5v-zlE/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3681517334',
        cover_link: '',
    },
    {
        id: 6,
        company_id: 6,
        created_at: '2023-08-05T07:06:54.321Z',
        response_date: '2023-08-20T07:06:54.321Z',
        follow_up_date: '',
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
        id: 7,
        company_id: 7,
        created_at: '2023-08-21T07:06:54.321Z',
        response_date: '2023-08-24T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'MVP Talent Corp',
        job_title: 'Senior Frontend Developer',
        resume_link:
            'https://docs.google.com/document/d/1fjWkIjuQTxMteiPMAVX1GTD0tJ5EjZt0YVUcy8UzJ5w/edit#heading=h.3znysh7',
        job_link: 'Linkedin Quick apply',
        cover_link: '',
    },
    {
        id: 8,
        company_id: 8,
        created_at: '2023-08-21T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Bounce',
        job_title: 'Senior Frontend Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1DKEAhFzXXC_2TKsQzWonAuhaXWuh6kYeHQD4kKEfcnY/edit',
        job_link: 'Linkedin Quick apply',
        cover_link: '',
    },
    {
        id: 9,
        company_id: 9,
        created_at: '2023-08-21T07:06:54.321Z',
        response_date: '2023-08-24T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Synergy Loft Inc.',
        job_title: 'Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3692308472',
        cover_link: '',
    },
    {
        id: 10,
        company_id: 10,
        created_at: '2023-08-21T07:06:54.321Z',
        response_date: '',
        follow_up_date: '2023-09-26T07:06:54.321Z',
        company_name: 'Sage Recruiting',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3691796005',
        cover_link: '',
    },
    {
        id: 11,
        company_id: 11,
        created_at: '2023-08-22T07:06:54.321Z',
        response_date: '',
        follow_up_date: '2023-09-26T07:06:54.321Z',
        company_name: 'Busbud',
        job_title: 'Software Developer - Platform',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link: 'https://www.linkedin.com/jobs/view/3667139355',
        cover_link: '',
    },
    {
        id: 12,
        company_id: 12,
        created_at: '2023-08-22T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'StackAdapt',
        job_title:
            'Senior Full Stack Engineer - Internal Tools & Billing',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link: 'https://www.linkedin.com/jobs/view/3674768930',
        cover_link: '',
    },
    {
        id: 13,
        company_id: 13,
        created_at: '2023-08-22T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Affinity.co',
        job_title: 'Senior Full Stack Engineer',
        resume_link:
            'https://docs.google.com/document/d/1YRYsP0DC2hhxzqe93T9egoknlbwQFR8JmRQcYdyE2Qs/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3675587733',
        cover_link: '',
    },
    {
        id: 14,
        company_id: 14,
        created_at: '2023-08-22T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Applied Systems',
        job_title: 'Full Stack Developer (React.js)',
        resume_link:
            'https://docs.google.com/document/d/1IkBTmm3sU5cWHQuop91xaXjn-RTMV0CWRIGEIVKbpFA/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3675950142',
        cover_link: '',
    },
    {
        id: 15,
        company_id: 15,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '2023-08-23T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Zapier',
        job_title: 'Sr. Engineer, Full Stack (Identity)',
        resume_link:
            'https://docs.google.com/document/d/1ANzR1JLbXUEQ0fLIc0NeKVymr7VmUfFPbyROeXXtPAk/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3625493463',
        cover_link: '',
    },
    {
        id: 16,
        company_id: 16,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '2023-08-28T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'CapIntel',
        job_title: 'Senior Software Developer - Frontend',
        resume_link:
            'https://docs.google.com/document/d/1XZxBYAnmcWrMjiYv3NYRU8Mr3Fe3TKsv1sEPQI-ous8/edit#heading=h.lnxbz9',
        job_link: 'https://www.linkedin.com/jobs/view/3689912441',
        cover_link: '',
    },
    {
        id: 17,
        company_id: 17,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '2023-08-26T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Pagefreezer',
        job_title: 'Software Engineer, Fullstack',
        resume_link:
            'https://docs.google.com/document/d/140DJY-CAj0YnYyLTANsjtaSiUgcYp14Nm0sThOKYMeQ/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3693019124',
        cover_link: '',
    },
    {
        id: 18,
        company_id: 18,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Storm4 - AgTech',
        job_title: 'Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1f6pR4noIqq5PPG-VBbDSv-bx-gBfoVgBi5X40pej8cY/edit#heading=h.lnxbz9',
        job_link: 'https://www.linkedin.com/jobs/view/3680897384',
        cover_link: '',
    },
    {
        id: 19,
        company_id: 19,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'NextPath Career Partners',
        job_title:
            'Full Stack Engineer – React / Next.js – REMOTE (3312)',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link: 'https://www.linkedin.com/jobs/view/3681722076',
        cover_link: '',
    },
    {
        id: 20,
        company_id: 20,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Chime',
        job_title: 'Software Developer',
        resume_link:
            'https://docs.google.com/document/d/1gGSza6Y4PLfDvRXuj4t-T75KxJtzHRZ0DvsDT_z9824/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3674498325',
        cover_link:
            'https://docs.google.com/document/d/1hFyyunCTKVmQK1Ly4TXDeGV_XRUDGT7Py6hV8FXYPjE/edit',
    },
    {
        id: 21,
        company_id: 21,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Mosey',
        job_title: 'Senior Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1G70rin5BJAMciD-VswqV31Cbl-fVjn1Ns0eCYYhmvHU/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3696158465',
        cover_link: '',
    },
    {
        id: 22,
        company_id: 22,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '2023-08-26T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'ETM Core',
        job_title: 'Frontend Developer - Remote',
        resume_link:
            'https://docs.google.com/document/d/1i1qE7bUK8Wm5yPQaEIUTxoKX9ZL8Rv7qe1-5SWtwLEI/edit#heading=h.1fob9te',
        job_link: 'https://www.linkedin.com/jobs/view/3695971987',
        cover_link: '',
    },
    {
        id: 23,
        company_id: 23,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Stan',
        job_title: 'Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1_nWfESeWnVc_i2zxUnjSLZK-BsEaWtt5ysFJug3B4co/edit',
        job_link:
            'https://stanforcreators.notion.site/Full-Stack-Software-Engineer-a5165fa3b9224d7993ed3a8942aff739',
        cover_link: '',
    },
    {
        id: 24,
        company_id: 24,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Shakepay',
        job_title: 'Senior Full Stack Developer (Remote - Canada)',
        resume_link:
            'https://docs.google.com/document/d/1cwHIPCHfbgFnHUkcfNuN1VzQKp26hGFdEImmk0aRa1A/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3668078067',
        cover_link: '',
    },
    {
        id: 25,
        company_id: 25,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Basetwo AI',
        job_title: 'Software Engineer, Full Stack',
        resume_link:
            'https://docs.google.com/document/d/1BGeCm_Td8FdjaOa9ca6tyGbFTmNOTqt6gDCZnlMmg9Q/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3698167391',
        cover_link: '',
    },
    {
        id: 26,
        company_id: 26,
        created_at: '2023-08-23T07:06:54.321Z',
        response_date: '2023-08-24T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Clipboard Health',
        job_title: 'Full-Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1vPECtxA1ok8klpm8aUbQAUkewllYq5wkit8QU1MvJC8/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3694285945',
        cover_link: '',
    },
    {
        id: 27,
        company_id: 27,
        created_at: '2023-08-24T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Lululemon',
        job_title:
            'Senior Full Stack Engineer (Front End focus) - lululemon Studio (Hybrid, Vancouver)',
        resume_link:
            'https://docs.google.com/document/d/1wU0qMKYw0jijblW9DryejlhpGrs8ouOHlHPESM-M2ww/edit#heading=h.3znysh7',
        job_link: 'https://www.linkedin.com/jobs/view/3676776765',
        cover_link: '',
    },
    {
        id: 28,
        company_id: 28,
        created_at: '2023-08-24T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Sonos',
        job_title: 'Software Engineer - Content Systems',
        resume_link:
            'https://docs.google.com/document/d/1TFvzuK6gqTPc8lGAQ5Rvm1WQB3cqezrMGRVHo3VYyJQ/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3697395126',
        cover_link: '',
    },
    {
        id: 29,
        company_id: 29,
        created_at: '2023-08-27T07:06:54.321Z',
        response_date: '2023-09-01T07:06:54.321Z',
        follow_up_date: '',
        company_name:
            'BC Public Service · British Columbia, Canada (Remote)',
        job_title: 'Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit#heading=h.ytp7hcl6fzta',
        job_link: 'https://www.linkedin.com/jobs/view/3698445449',
        cover_link: '',
    },
    {
        id: 30,
        company_id: 30,
        created_at: '2023-08-28T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Konnect Way',
        job_title: 'Senior React + PHP Developer',
        resume_link:
            'https://docs.google.com/document/d/12TJszmIIe32zdwDUl0WveA21Fpyajbk8qjSZ44SrcXA/edit#heading=h.3znysh7',
        job_link: 'https://www.linkedin.com/jobs/view/3666768299',
        cover_link: '',
    },
    {
        id: 31,
        company_id: 31,
        created_at: '2023-08-28T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'd1g1t',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/1J6zr9ZbyaM20RjBEgS0ESYkXTQJL_lNhx44uTgzxNfI/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3674019087',
        cover_link: '',
    },
    {
        id: 32,
        company_id: 32,
        created_at: '2023-09-01T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Roofr',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/19OjTxUYlmW9dULfyY4SuiCLFGtkLPOmVYlboPwQ-zfc/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3706104549',
        cover_link: '',
    },
    {
        id: 33,
        company_id: 33,
        created_at: '2023-09-01T07:06:54.321Z',
        response_date: '2023-09-03T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Gigster Network',
        job_title: 'Senior Front-End Developer',
        resume_link:
            'https://docs.google.com/document/d/1hVSewcgMP8wE5bxKmG37oU78E0LQwhH4aiK55Q6cL6g/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3686308419',
        cover_link: '',
    },
    {
        id: 34,
        company_id: 34,
        created_at: '2023-09-01T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Swim Recruiting',
        job_title: 'PHP Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1_k5EVuEBlXm4yrJQmfvHDMxiV6DpmurMYPHRtfRbRDI/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3690782285',
        cover_link: '',
    },
    {
        id: 35,
        company_id: 35,
        created_at: '2023-09-01T07:06:54.321Z',
        response_date: '2023-09-13T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Adobe',
        job_title: 'Senior Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1m3slPBa57DQYQJ-u4MishvixcHvSCTrxOXCizbQtXdE/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3704518292',
        cover_link: '',
    },
    {
        id: 36,
        company_id: 36,
        created_at: '2023-09-01T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Pani',
        job_title: 'Full-Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1l3c0WP5UPJySqbY3UH7AnRVwIe6JIU9kkpaFk5txl0M/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3701471334',
        cover_link: '',
    },
    {
        id: 37,
        company_id: 37,
        created_at: '2023-09-06T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'PYMNTS',
        job_title: 'Full-Stack React/Node.js Developer',
        resume_link:
            'https://docs.google.com/document/d/1OsVXEWJWSFU8J8IW48DRwdv5EWYSzCi7qJsQ1laxdTQ/edit#heading=h.17dp8vu',
        job_link: 'https://www.linkedin.com/jobs/view/3701790168',
        cover_link:
            'https://docs.google.com/document/d/1nJFmYZPJOuZ8g0JFxFPKv1OucniNOsarkd7FEnFgGms/edit',
    },
    {
        id: 38,
        company_id: 38,
        created_at: '2023-09-08T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Milk Moovement',
        job_title: 'Full Stack Developer II',
        resume_link:
            'https://docs.google.com/document/d/1T8-4FhVaT9e4rzck6HUI9ChdQyTuELXO5EmTgNywMg0/edit#heading=h.1fob9te',
        job_link: 'https://www.linkedin.com/jobs/view/3706265507',
        cover_link: '',
    },
    {
        id: 39,
        company_id: 39,
        created_at: '2023-09-11T07:06:54.321Z',
        response_date: '2023-10-20T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Klue',
        job_title: 'Intermediate Frontend Engineer ',
        resume_link:
            'https://docs.google.com/document/d/1DKFYV9LR34OwQ5l-eul7M_EQEzBuUdOzUtRj8nq-drY/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3700024349',
        cover_link: '',
    },
    {
        id: 40,
        company_id: 40,
        created_at: '2023-09-11T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: "Let's Roam",
        job_title: 'Junior & Mid-Level Full Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1IqF--kqnzQCPWtcKTQljkPFNDV-HjzzttZwODJHKAzA/edit#heading=h.aqqgyf1jcetq',
        job_link: 'https://www.linkedin.com/jobs/view/3689652497',
        cover_link: '',
    },
    {
        id: 41,
        company_id: 41,
        created_at: '2023-09-11T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Pixieset',
        job_title: 'Software Developer, Full Stack',
        resume_link:
            'https://docs.google.com/document/d/1VhKobNwy3EmVs1aDVa-bhvFsiuaySU8NGIIZBAWS9Qo/edit',
        job_link:
            'https://pixieset.breezy.hr/p/c8abb7691da2-software-developer-full-stack',
        cover_link: '',
    },
    {
        id: 42,
        company_id: 41,
        created_at: '2023-09-11T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Pixieset',
        job_title: 'Software Developer, Full Stack (Growth)',
        resume_link:
            'https://docs.google.com/document/d/1VhKobNwy3EmVs1aDVa-bhvFsiuaySU8NGIIZBAWS9Qo/edit',
        job_link:
            'https://pixieset.breezy.hr/p/047d313cd6f7-software-developer-full-stack-growth',
        cover_link: '',
    },
    {
        id: 43,
        company_id: 24,
        created_at: '2023-09-11T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Shakepay',
        job_title:
            'Intermediate Full Stack Developer (Remote - Canada)',
        resume_link:
            'https://docs.google.com/document/d/11tZ7McxQ7JX4s9MkBTmzz28LwgR0CYM2H8Xc_XQWHJ4/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3718410689',
        cover_link: '',
    },
    {
        id: 44,
        company_id: 42,
        created_at: '2023-09-12T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Pattern Learning AI',
        job_title: 'Entry-Level React Developer - US/Canada',
        resume_link:
            'https://docs.google.com/document/d/1HLujYiV4G6GgtBNHuVBS8HPCqMHuMrEUCeRcFkp2B9g/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3718050458',
        cover_link: '',
    },
    {
        id: 45,
        company_id: 43,
        created_at: '2023-09-12T07:06:54.321Z',
        response_date: '2023-10-14T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Asana',
        job_title: 'Software Engineer, Product',
        resume_link: 'Easy Apply - Linkedin with Master resume',
        job_link: 'https://www.linkedin.com/jobs/view/3715546445',
        cover_link: '',
    },
    {
        id: 46,
        company_id: 44,
        created_at: '2023-09-12T07:06:54.321Z',
        response_date: '2023-09-20T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Clevertech',
        job_title: 'Senior Full Stack Engineer - Javascript',
        resume_link: '',
        job_link: '',
        cover_link: '',
    },
    {
        id: 47,
        company_id: 45,
        created_at: '2023-09-14T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Randstad',
        job_title: 'Front End x 2 - Remote - 4 months',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3712104136',
        cover_link: '',
    },
    {
        id: 48,
        company_id: 46,
        created_at: '2023-09-14T07:06:54.321Z',
        response_date: '2023-10-16T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Fullscript',
        job_title: 'Javascript Engineer II',
        resume_link:
            'https://docs.google.com/document/d/1Qe6JW5TMHfdCr6-DMN0SYLPnMxYgwc0j0GqDwKZhIVk/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3712103155',
        cover_link: '',
    },
    {
        id: 49,
        company_id: 47,
        created_at: '2023-09-18T07:06:54.321Z',
        response_date: '2023-09-25T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Coconut',
        job_title: 'Senior Developer',
        resume_link:
            'https://docs.google.com/document/d/1CylxZDjhgVcA8duzPA9g74J0UuWmivt6Y9k5MP2-BvM/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3695489352',
        cover_link: '',
    },
    {
        id: 50,
        company_id: 48,
        created_at: '2023-09-21T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'RainBarrel',
        job_title: 'Senior Full-Stack Developer',
        resume_link:
            'https://docs.google.com/document/d/1AM6JpR_FjSDX3-7koQZJ54fEV3kOlDuysKkhnnxztIU/edit',
        job_link:
            'https://loknowcareers.applytojobs.ca/engineering+and+technology/24909',
        cover_link:
            'https://docs.google.com/document/d/1cTyKv_HtpPw0-VTlZO_F2WVcarDKjKn72bnMiUIPccU/edit',
    },
    {
        id: 51,
        company_id: 49,
        created_at: '2023-09-29T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Fortinet',
        job_title: 'Web Developer',
        resume_link:
            'https://docs.google.com/document/d/1AM6JpR_FjSDX3-7koQZJ54fEV3kOlDuysKkhnnxztIU/edit',
        job_link: '',
        cover_link: '',
    },
    {
        id: 52,
        company_id: 50,
        created_at: '2023-09-29T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'The Conference Board of Canada',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            'https://docs.google.com/document/d/1qQ5PyrR5wh6dtsM2W669skkii6iJ7r6zfd5lyKevJZA/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3729800594',
        cover_link: '',
    },
    {
        id: 53,
        company_id: 51,
        created_at: '2023-09-29T07:06:54.321Z',
        response_date: '2023-10-02T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'SimplyPHP',
        job_title: 'Web Application Developer',
        resume_link:
            'https://docs.google.com/document/d/1JmKY176GWOhCEjYe7ZfM4YspCcRqUofN2dJGaERz4fU/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3726280868',
        cover_link: '',
    },
    {
        id: 54,
        company_id: 52,
        created_at: '2023-09-29T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Craver',
        job_title: 'Intermediate Frontend Developer',
        resume_link:
            'https://docs.google.com/document/d/1QhqFqvA3FJam6pC0JkW6Pha1LsQ229Q3FpL0s7Vw9rs/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3726533471',
        cover_link: '',
    },
    {
        id: 55,
        company_id: 53,
        created_at: '2023-09-29T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Super.com',
        job_title:
            'Intermediate Software Engineer (Full Stack) (Remote)',
        resume_link:
            'https://docs.google.com/document/d/169g8VMefgIlft_iYZpCJfVInHYH7EvqQwhOmk6eNsic/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3726202995',
        cover_link: '',
    },
    {
        id: 56,
        company_id: 51,
        created_at: '2023-10-02T07:06:54.321Z',
        response_date: '2023-10-05T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'SimplyPHP',
        job_title: 'PHP Developer',
        resume_link:
            'https://docs.google.com/document/d/1JmKY176GWOhCEjYe7ZfM4YspCcRqUofN2dJGaERz4fU/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3727230094',
        cover_link: '',
    },
    {
        id: 57,
        company_id: 54,
        created_at: '2023-10-02T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'PolicyMe',
        job_title: 'Software Engineer - Fullstack',
        resume_link:
            'https://www.linkedin.com/jobs/view/3727222280/?refId=da8434e9-6006-430e-b50c-b45cdf7cb65d&',
        job_link: 'https://www.linkedin.com/jobs/view/3727222280',
        cover_link: '',
    },
    {
        id: 58,
        company_id: 55,
        created_at: '2023-10-05T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'BrainStation',
        job_title: 'Web Developer - Educator',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link:
            'https://brainstation.io/careers/jobs/educator-web-developer_5763039003',
        cover_link:
            'https://docs.google.com/document/d/10277CJtpVAiv20JMZ0n2OllFiW3n8rb_E8jVht-IbEw/edit',
    },
    {
        id: 59,
        company_id: 56,
        created_at: '2023-10-06T07:06:54.321Z',
        response_date: '2023-10-07T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Jungle Scout',
        job_title: 'Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3712198245',
        cover_link: '',
    },
    {
        id: 60,
        company_id: 57,
        created_at: '2023-10-07T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'HustleWing',
        job_title: 'Web Developer',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3735228144',
        cover_link: '',
    },
    {
        id: 61,
        company_id: 58,
        created_at: '2023-10-07T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'eCapital Corp.',
        job_title: 'Full-Stack Software Developer',
        resume_link:
            'https://docs.google.com/document/d/1ja-ZUwe9QDFOn0sshAVSRK2XMoN9fsVv2g2lrZubJo4/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3729786794',
        cover_link: '',
    },
    {
        id: 62,
        company_id: 59,
        created_at: '2023-10-07T07:06:54.321Z',
        response_date: '2023-10-11T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Cedar',
        job_title: 'Software Engineer (Launch)',
        resume_link:
            'https://docs.google.com/document/d/1AwwmmZ488xus-DzhCdmp1NSH6_TnoRjxxq7Wg0nKuok/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3734045040',
        cover_link: '',
    },
    {
        id: 63,
        company_id: 60,
        created_at: '2023-10-12T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Binance.us',
        job_title: 'Senior Web Developer (Remote)',
        resume_link:
            'https://docs.google.com/document/d/1PgOJuQ8Kf0EJ2syicbWz9xDXG6DYjKRJpdt8GoATppI/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3733303014',
        cover_link: '',
    },
    {
        id: 64,
        company_id: 39,
        created_at: '2023-10-13T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Klue',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/1DKFYV9LR34OwQ5l-eul7M_EQEzBuUdOzUtRj8nq-drY/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3679654545',
        cover_link: '',
    },
    {
        id: 65,
        company_id: 61,
        created_at: '2023-10-13T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Airble',
        job_title: 'Software Developer',
        resume_link:
            'https://docs.google.com/document/d/1gY9rf9FldwNkuLmu8Hfx-GZ-a7cVZq68qJEnrHxoUeI/edit',
        job_link:
            'https://jobs.vantechjournal.com/software-developer-3439ae3c2a07',
        cover_link: '',
    },
    {
        id: 66,
        company_id: 62,
        created_at: '2023-10-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Canny',
        job_title: 'Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/10YDtKvbs4_cTIpR_xj3MCNIj45Q8v90w1zBpdEE9G7Q/edit#heading=h.lnxbz9',
        job_link: 'https://www.linkedin.com/jobs/view/3744539901',
        cover_link:
            'https://docs.google.com/document/d/1y5uYESnWEugCvUL5p5YaydhtzuMrsC1FvGAK91j29ww/edit',
    },
    {
        id: 67,
        company_id: 63,
        created_at: '2023-10-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Fishtank',
        job_title: 'Front-End Developer',
        resume_link:
            'https://docs.google.com/document/d/1k--ozg39Ei9jnsuwTkKR3rLqFv5Jhd32Xm86xGtAYGU/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3740404336',
        cover_link: '',
    },
    {
        id: 68,
        company_id: 32,
        created_at: '2023-10-23T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Roofr',
        job_title: 'Senior Frontend Engineer',
        resume_link:
            'https://docs.google.com/document/d/1kUnMDbyY7246MSS3Gdoenvo8Z-ghpoVSJXTtGVqAgYE/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3737481289',
        cover_link:
            'https://docs.google.com/document/d/1tfTo1fWZSqEGS4EV74bh8IoH3w1SodXP1hGR9zmYSoc/edit',
    },
    {
        id: 69,
        company_id: 64,
        created_at: '2023-10-31T07:06:54.321Z',
        response_date: '2023-11-04T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Hootsuite',
        job_title: 'Intermediate Software Developer, Full Stack',
        resume_link:
            'https://docs.google.com/document/d/1Sba_KdicGOghFBXGO2aQ00rY2dueNs7PCZYd53Qx_48/edit',
        job_link: 'https://careers.hootsuite.com/job/?gh_jid=5155303',
        cover_link:
            'https://docs.google.com/document/d/1eULrqVisj4pzqfJxbO_UsapSjFGlQtQKNcodjkc5hkI/edit',
    },
    {
        id: 70,
        company_id: 65,
        created_at: '2023-11-01T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Aquanow',
        job_title: 'Intermediate Fronted Javascript Developer',
        resume_link:
            'https://docs.google.com/document/d/1mGNu41h3y25u3QlFdlyjrOpktoShgTKp1uQmfQL3968/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3747519488',
        cover_link: '',
    },
    {
        id: 71,
        company_id: 66,
        created_at: '2023-11-01T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Tucows',
        job_title: 'Sr Software Engineer - Domains',
        resume_link:
            'https://docs.google.com/document/d/19vN6yHMRGCQTjckihJciVEnAh78WfsUBDlB2TEuYnjg/edit#heading=h.3znysh7',
        job_link: 'https://www.linkedin.com/jobs/view/3749742392',
        cover_link:
            'https://docs.google.com/document/d/1tfTo1fWZSqEGS4EV74bh8IoH3w1SodXP1hGR9zmYSoc/edit',
    },
    {
        id: 72,
        company_id: 67,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '2023-11-14T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'ResearchGate',
        job_title: 'Senior Full-Stack Engineer React & PHP',
        resume_link:
            'https://docs.google.com/document/d/1GiHUPezBa_UvOwlOqqLMAkLDuow1tn6yiF5LggEZCAI/edit',
        job_link:
            'https://jobs.lever.co/researchgate/68129ddc-15ab-4999-bfab-0a6cf5ebbfd7/apply',
        cover_link:
            'https://docs.google.com/document/d/10OknjvMnW-Cr56QS523ry_YAO4_YNYRI5_E80IjD8R0/edit',
    },
    {
        id: 73,
        company_id: 68,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '2023-11-09T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Caddie',
        job_title: 'Senior Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1F7S-AMCmxfGzQF6yLqAxLqBudXCg5pAUKMpwh9UslVY/edit',
        job_link:
            'https://www.ycombinator.com/companies/caddie-ai/jobs/DZmfnRk-senior-full-stack-software-engineer?utm_source=syn_li',
        cover_link: '',
    },
    {
        id: 74,
        company_id: 69,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Webisoft',
        job_title: 'ReactJS Developer',
        resume_link: 'Latest resume',
        job_link: 'https://www.linkedin.com/jobs/view/3750356791',
        cover_link: '',
    },
    {
        id: 75,
        company_id: 33,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '2023-11-12T07:06:54.321Z',
        follow_up_date: '',
        company_name: 'Gigster Network',
        job_title: 'Senior Back-End Developer',
        resume_link:
            'https://docs.google.com/document/d/1hHP1fuHsuiUs-12HejAwg7y-hpJ_p0zKhSmrFHzGfEc/edit#heading=h.1fob9te',
        job_link: 'https://www.linkedin.com/jobs/view/3759808911',
        cover_link: '',
    },
    {
        id: 76,
        company_id: 70,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'CORADIX',
        job_title: 'Senior Web Developer - Government of Canada',
        resume_link:
            'https://docs.google.com/document/d/10U4lo3zNSGb6d4cwJQ7lA-ZBcWJh40o9_g-yUnt3VlA/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3761113787',
        cover_link: '',
    },
    {
        id: 77,
        company_id: 71,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Just Appraised',
        job_title: 'Frontend Developer',
        resume_link:
            'https://docs.google.com/document/d/1ZvzTlfWpqmDW1xOGhgzxyLg0dGh0rn4IiNYOM3bEdz4/edit#heading=h.lnxbz9',
        job_link: 'https://www.linkedin.com/jobs/view/3759083636',
        cover_link:
            'https://docs.google.com/document/d/1VLe4CWmX-XpuHAgfVWyyyGDUTzny_Bt1sn1QcmMbsmU/edit',
    },
    {
        id: 78,
        company_id: 72,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Air Apps',
        job_title: 'Backend Developer - Join Our Talent Pool!',
        resume_link: 'Latest resume',
        job_link: 'https://www.linkedin.com/jobs/view/3759307719',
        cover_link: '',
    },
    {
        id: 79,
        company_id: 73,
        created_at: '2023-11-09T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'UniUni',
        job_title: 'Senior Software Developer',
        resume_link: 'Latest resume',
        job_link:
            'https://ca.indeed.com/viewjob?from=app-tracker-post_apply-appcard&hl=en&jk=a54ef8e6c5f3db0b&tk=1heqjd880ih73800',
        cover_link: '',
    },
    {
        id: 80,
        company_id: 74,
        created_at: '2023-11-10T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Konect',
        job_title: 'Backend Developer (PHP & Node.js)',
        resume_link:
            'https://docs.google.com/document/d/1Je1SGxrSsndsHMgc4TY_vycHfa6tYcJsK8qo_h0MXr0/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3756540894',
        cover_link: '',
    },
    {
        id: 81,
        company_id: 75,
        created_at: '2023-11-10T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Loopio',
        job_title: 'Software Developer (Core Experience)',
        resume_link:
            'https://docs.google.com/document/d/1BHFi9lCjTnCnhA6kjNnThsgf4EsKPxUjdbT3i11HffE/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3721913457',
        cover_link: '',
    },
    {
        id: 82,
        company_id: 76,
        created_at: '2023-11-10T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Fable',
        job_title: 'Full Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1OBrKW5rFUshIordDpg-ajpS3kn0muoBc2gBhXutmMag/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3737610422',
        cover_link: '',
    },
    {
        id: 83,
        company_id: 77,
        created_at: '2023-11-10T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Salesforce',
        job_title:
            'Full-Stack Software Engineer – Application Development',
        resume_link:
            'https://docs.google.com/document/d/1Yuo9_o6oT8nNDU_BrMG2PZe0wU8HvsJZwdSnvu9yv7s/edit#heading=h.1fob9te',
        job_link: 'https://www.linkedin.com/jobs/view/3707152946',
        cover_link:
            'https://docs.google.com/document/d/10OknjvMnW-Cr56QS523ry_YAO4_YNYRI5_E80IjD8R0/edit',
    },
    {
        id: 84,
        company_id: 78,
        created_at: '2023-11-13T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'iContact',
        job_title:
            'Senior Backend / Fullstack Software Engineer - iContact',
        resume_link:
            'https://docs.google.com/document/d/1lh0_F4e246VWhEBSLYh74CHodlm82e7LkAU8Ega_f3Q/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3598861942',
        cover_link:
            'https://docs.google.com/document/d/1Yvv0H_lBgVF8RAs3321jl6bND3FB4ObQOcGHkrrexqA/edit',
    },
    {
        id: 85,
        company_id: 79,
        created_at: '2023-11-14T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'Dapper Labs',
        job_title: 'Senior Frontend Engineer I (Vancouver)',
        resume_link:
            'https://docs.google.com/document/d/1OOZ2MMzlmnls5PzSKQtVvZYJUoWq6SPPwIwBcyDxYLU/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3757054802/',
        cover_link: '',
    },
    {
        id: 86,
        company_id: 80,
        created_at: '2023-11-15T07:06:54.321Z',
        response_date: '',
        follow_up_date: '',
        company_name: 'CommandLink',
        job_title: 'Full-Stack Software Engineer',
        resume_link:
            'https://docs.google.com/document/d/1Oqt3FUr0ogDUuSrs6KlnoJ-h4BfzfsAA8IBIM8--M44/edit',
        job_link: 'https://www.linkedin.com/jobs/view/3764114797',
        cover_link: '',
    },
];

async function main() {
    // Create admin user
    const admin = await prisma.User.upsert({
        where: {
            email: 'admin@admin.com',
        },
        update: {},
        create: {
            name: 'Admin Admin',
            email: 'admin@admin.com',
        },
    });

    // Create action types
    for (const actionTypeTitle of actionTypes) {
        await prisma.actionType.create({
            data: {
                actionTypeTitle,
            },
        });
    }

    // Create companies with new design data
    let simpleCounterComp = 0;
    let simpleCounterAction = 0;
    await Promise.all(
        newDesignData.map(async (newData) => {
            try {
                await prisma.Company.create({
                    data: {
                        companyName: newData.company_name,
                        companyWebsite: '',
                    },
                });
            } catch (error) {
                if (
                    error.code === 'P2002' &&
                    error.meta?.target?.includes('companyName')
                ) {
                    console.log(
                        `Duplicate company name: 'your_company_name'. Skipping.`
                    );
                } else {
                    throw error;
                }
            }
        })
    );

    await Promise.all(
        newDesignData.map(async (newData) => {
            try {
                // Retrieve the company ID based on the company name
                const company = await prisma.Company.findUnique({
                    where: { companyName: newData.company_name },
                });

                const user = await prisma.User.findUnique({
                    where: { email: 'admin@admin.com' },
                });

                if (company) {
                    // Create a job entry using the retrieved company ID
                    await prisma.Job.create({
                        data: {
                            jobTitle: newData.job_title,
                            companyId: company.id,
                            jobLocation: newData.job_location,
                            jobLink: newData.job_link,
                            resumeLink: newData.resume_link,
                            coverLink: newData.cover_link,
                            jobWorkEnv: newData.job_work_env,
                            createdAt: newData.created_at,
                            userId: user.id,
                        },
                    });
                } else {
                    console.log(
                        `Company not found for job entry: ${newData.job_title}. Skipping.`
                    );
                }
            } catch (error) {
                console.error(
                    `Error creating job entry: ${error.message}`
                );
            }
        })
    );

    // Fetch all jobs from the Job table
    const allJobs = await prisma.Job.findMany();
    const user = await prisma.User.findUnique({
        where: { email: 'admin@admin.com' },
    });
    const actionTypeData = await prisma.ActionType.findFirst({
        where: { actionTypeTitle: 'Apply to the job' },
    });

    // Iterate through each job and create an entry in the Action table
    await Promise.all(
        allJobs.map(async (job) => {
            try {
                await prisma.Action.create({
                    data: {
                        actionTypeId: actionTypeData.id,
                        jobId: job.id,
                        userId: user.id, // Replace with the actual user ID
                    },
                });
            } catch (error) {
                console.error(
                    `Error creating action entry: ${error.message}`
                );
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
