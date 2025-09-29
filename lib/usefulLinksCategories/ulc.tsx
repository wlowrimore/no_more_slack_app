import {
  ExternalLink,
  Scale,
  Shield,
  Leaf,
  Users,
  FileText,
  Eye,
  Gavel,
  Flag,
} from "lucide-react";

export interface LinkItem {
  title: string;
  url: string;
  description: string;
}

export interface LinkCategory {
  title: string;
  icon: React.ReactNode;
  className?: string;
  description: string;
  links: LinkItem[];
}

export default function linkCategories(): LinkCategory[] {
  return [
    {
      title: "Political Fact-Checking",
      icon: <Eye className="w-8 h-8" />,
      description:
        "Verify claims and combat misinformation with trusted fact-checking resources",
      links: [
        {
          title: "PolitiFact",
          url: "https://www.politifact.com/",
          description:
            "Pulitzer Prize-winning fact-checking website with Truth-O-Meter ratings",
        },
        {
          title: "FactCheck.org",
          url: "https://www.factcheck.org/",
          description:
            "Nonpartisan project of the Annenberg Public Policy Center",
        },
        {
          title: "Snopes",
          url: "https://www.snopes.com/",
          description:
            "Independent fact-checking service covering politics, news, and urban legends",
        },
        {
          title: "AllSides",
          url: "https://www.allsides.com/",
          description:
            "Media bias ratings and balanced news coverage from multiple perspectives",
        },
        {
          title: "Associated Press Fact Check",
          url: "https://apnews.com/hub/ap-fact-check",
          description:
            "AP's dedicated fact-checking team covering national and international claims",
        },
      ],
    },
    {
      title: "Constitutional Rights Lawyers",
      icon: <Scale className="w-5 h-5" />,
      description:
        "Legal experts specializing in constitutional law and civil liberties",
      links: [
        {
          title: "American Civil Liberties Union (ACLU)",
          url: "https://www.aclu.org/",
          description:
            "Premier civil liberties organization with nationwide legal services",
        },
        {
          title: "Electronic Frontier Foundation (EFF)",
          url: "https://www.eff.org/",
          description: "Digital rights and internet freedom legal advocacy",
        },
        {
          title: "Institute for Justice",
          url: "https://ij.org/",
          description:
            "Libertarian public interest law firm focused on constitutional cases",
        },
        {
          title: "Constitutional Law Reporter",
          url: "https://www.constlawreporter.com/",
          description:
            "Directory of constitutional law attorneys and legal resources",
        },
        {
          title: "National Lawyers Guild",
          url: "https://www.nlg.org/",
          description:
            "Progressive bar association providing legal support for activists",
        },
      ],
    },
    {
      title: "Environmental Law",
      icon: <Leaf className="w-5 h-5" />,
      description:
        "Legal resources for environmental protection and climate justice",
      links: [
        {
          title: "Earthjustice",
          url: "https://earthjustice.org/",
          description: "Premier nonprofit environmental law organization",
        },
        {
          title: "Natural Resources Defense Council (NRDC)",
          url: "https://www.nrdc.org/",
          description:
            "Environmental action group with strong legal advocacy wing",
        },
        {
          title: "Environmental Law Institute",
          url: "https://www.eli.org/",
          description:
            "Research and education organization for environmental law",
        },
        {
          title: "Sierra Club Legal Defense",
          url: "https://www.sierraclub.org/environmental-law",
          description: "Environmental litigation and legal advocacy",
        },
        {
          title: "Center for Biological Diversity",
          url: "https://www.biologicaldiversity.org/",
          description:
            "Legal action to protect endangered species and wild places",
        },
      ],
    },
    {
      title: "Immigration & Deportation Defense",
      icon: <Users className="w-5 h-5" />,
      description:
        "Legal assistance for immigration cases and deportation defense",
      links: [
        {
          title: "American Immigration Lawyers Association",
          url: "https://www.aila.org/",
          description:
            "Find qualified immigration attorneys and legal resources",
        },
        {
          title: "National Immigration Forum",
          url: "https://immigrationforum.org/",
          description: "Immigration advocacy and policy resources",
        },
        {
          title: "Immigration Legal Resource Center",
          url: "https://www.ilrc.org/",
          description:
            "Training and technical assistance for immigration legal aid",
        },
        {
          title: "RAICES (Texas)",
          url: "https://www.raicestexas.org/",
          description: "Immigration legal services and advocacy in Texas",
        },
        {
          title: "United We Dream",
          url: "https://unitedwedream.org/",
          description:
            "Immigrant youth-led organization with legal support network",
        },
      ],
    },
    {
      title: "Voting Rights & Election Integrity",
      icon: <Flag className="w-5 h-5" />,
      description: "Protecting voting access and ensuring fair elections",
      links: [
        {
          title: "Brennan Center for Justice",
          url: "https://www.brennancenter.org/",
          description:
            "Nonpartisan law and policy institute focused on democracy and justice",
        },
        {
          title: "Common Cause",
          url: "https://www.commoncause.org/",
          description: "Government accountability and voting rights advocacy",
        },
        {
          title: "League of Women Voters",
          url: "https://www.lwv.org/",
          description:
            "Nonpartisan organization promoting informed voter participation",
        },
        {
          title: "Vote.org",
          url: "https://www.vote.org/",
          description:
            "Voter registration, absentee ballots, and polling place information",
        },
        {
          title: "Fair Fight",
          url: "https://fairfight.com/",
          description:
            "Promoting fair elections and fighting voter suppression",
        },
      ],
    },
    {
      title: "Criminal Justice Reform",
      icon: <Gavel className="w-5 h-5" />,
      description:
        "Legal advocacy for criminal justice reform and prisoner rights",
      links: [
        {
          title: "The Innocence Project",
          url: "https://innocenceproject.org/",
          description:
            "Exonerating wrongly convicted individuals through DNA testing",
        },
        {
          title: "Equal Justice Initiative",
          url: "https://eji.org/",
          description: "Criminal justice reform and racial justice advocacy",
        },
        {
          title: "Prison Policy Initiative",
          url: "https://www.prisonpolicy.org/",
          description: "Research and advocacy for criminal justice reform",
        },
        {
          title:
            "National Association for the Advancement of Colored People (NAACP)",
          url: "https://naacp.org/",
          description:
            "Civil rights organization with criminal justice reform focus",
        },
        {
          title: "Sentencing Project",
          url: "https://www.sentencingproject.org/",
          description:
            "Research and advocacy for sentencing reform and alternatives",
        },
      ],
    },
    {
      title: "Press Freedom & Transparency",
      icon: <FileText className="w-5 h-5" />,
      description: "Protecting journalist rights and government transparency",
      links: [
        {
          title: "Reporters Committee for Freedom of the Press",
          url: "https://www.rcfp.org/",
          description: "Legal defense fund and resources for journalists",
        },
        {
          title: "Freedom of Information Act (FOIA) Resources",
          url: "https://www.foia.gov/",
          description: "Official government portal for FOIA requests",
        },
        {
          title: "Sunshine in Government Initiative",
          url: "https://sunshineingovernment.org/",
          description: "Coalition promoting open government and transparency",
        },
        {
          title: "Committee to Protect Journalists",
          url: "https://cpj.org/",
          description: "International press freedom advocacy organization",
        },
        {
          title: "MuckRock",
          url: "https://www.muckrock.com/",
          description:
            "Platform for filing and tracking public records requests",
        },
      ],
    },
    {
      title: "Government Accountability",
      icon: <Shield className="w-5 h-5" />,
      description:
        "Watchdog organizations monitoring government actions and spending",
      links: [
        {
          title: "Government Accountability Office (GAO)",
          url: "https://www.gao.gov/",
          description:
            "Congressional watchdog investigating government spending and performance",
        },
        {
          title: "OpenSecrets.org",
          url: "https://www.opensecrets.org/",
          description: "Campaign finance and lobbying disclosure database",
        },
        {
          title: "Citizens for Responsibility and Ethics in Washington (CREW)",
          url: "https://www.citizensforethics.org/",
          description: "Government ethics and accountability watchdog",
        },
        {
          title: "Project On Government Oversight (POGO)",
          url: "https://www.pogo.org/",
          description: "Nonpartisan government accountability organization",
        },
        {
          title: "Judicial Watch",
          url: "https://www.judicialwatch.org/",
          description:
            "Government transparency through litigation and investigations",
        },
      ],
    },
  ];
}
