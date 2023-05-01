import React from 'react'
import './Tools.scss'
import apache from '../../assets/Apache.png'
import aws from '../../assets/aws.png'
import clouds from '../../assets/clouds.png'
import excels from '../../assets/excels.png'
import Fivetran from '../../assets/Fivetran.png'
import PostGIS from '../../assets/PostGIS.png'
import PostgreSQL from '../../assets/PostgreSQL.png'
import PowerBI from '../../assets/PowerBI.jpg'
import Powerpoint from '../../assets/Powerpoint.png'
import Python from '../../assets/Python.png'
import sheets from '../../assets/sheets.png'
import Tableau from '../../assets/Tableau.png'

const Tools = ({ closeModal }) => {
    const tools = [
        {
            id: 1,
            image: apache,
            title: "Apache",
            link: "https://spark.apache.org/"
        },
        {
            id: 2,
            image: aws,
            title: "Amazon Web Services",
            link: "https://aws.amazon.com/free/?trk=2d3e6bee-b4a1-42e0-8600-6f2bb4fcb10c&sc_channel=ps&ef_id=CjwKCAjwxr2iBhBJEiwAdXECw13rxdD2uul9teuasP8dwdvTg5RTYbXaYeKWaZ7utjQyjQaRp3PsdBoCygsQAvD_BwE:G:s&s_kwcid=AL!4422!3!645125273261!e!!g!!aws!19574556887!145779846712&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
        },  
        {
            id: 3,
            image: clouds,
            title: "Google Cloud",
            link: "https://cloud.google.com/gcp?utm_source=google&utm_medium=cpc&utm_campaign=emea-ng-all-en-bkws-all-all-trial-e-gcp-1011340&utm_content=text-ad-none-any-DEV_c-CRE_501794636575-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt+~+GCP+~+General%23v1-KWID_43700061569959218-kwd-6458750523-userloc_1010297&utm_term=KW_google%20cloud-NET_g-PLAC_&&gad=1&gclid=CjwKCAjwxr2iBhBJEiwAdXECwzhB0l72Z33vpRIiI9z40psTLpcSPvT7IUC5tgpOqgmKThgAlOMQ0BoCB54QAvD_BwE&gclsrc=aw.ds"
        },
        {
            id: 4,
            image: excels,
            title: "Microsoft excel",
            link: "https://support.microsoft.com/en-us/excel"
        },
        {
            id: 5,
            image: Fivetran,
            title: "FiveTran",
            link: "https://www.fivetran.com/"
        },
        {
            id: 6,
            image: PostGIS,
            title: "PostGIS",
            link: "https://postgis.net/"
        },
        {
            id: 7,
            image: PostgreSQL,
            title: "PostgreSQL",
            link: "https://www.postgresql.org/"
        },
        {
            id: 8,
            image: PowerBI,
            title: "PowerBI",
            link: "https://powerbi.microsoft.com/en-au/"
        },
        {
            id: 9,
            image: Powerpoint,
            title: "Powerpoint",
            link: "https://www.microsoft.com/en-us/microsoft-365/powerpoint"
        },
        {
            id: 10,
            image: Python,
            title: "Python",
            link: "https://www.python.org/"
        },
        {
            id: 11,
            image: sheets,
            title: "Google Sheets",
            link: "https://www.google.com/sheets/about/"
        },
        {
            id: 12,
            image: Tableau,
            title: "Tableau",
            link: "https://www.tableau.com/"
        }
    ]
  return (
    <div className='tools'>
        <div className="box">
            <button onClick={closeModal}>
                <i class="fa-solid fa-arrow-left fa-2x"></i>
            </button>

            {tools.map((tool, index) => (
                <div className="tool">
                    <a href={tool.link} target='_blank'><img src={tool.image} alt="" /></a>
                    <span>{tool.title}</span>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Tools