import React from "react";
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

interface LinkItem {
  title: string;
  url: string;
  description: string;
}

interface LinkCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  links: LinkItem[];
}

const UsefulLinksComp = () => {
  const linkCategories: LinkCategory[] = [
    {
      title: "Political Fact-Checking",
      icon: <Eye className="w-5 h-5" />,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-200 mb-4">
            Essential Resources for Democratic Participation
          </h1>
          <p className="text-lg text-amber-100/80 max-w-3xl mx-auto">
            A curated collection of trusted organizations, legal resources, and
            advocacy groups to empower informed citizenship and protect
            constitutional rights.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {linkCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-neutral-800/50 border border-neutral-600/30 rounded-xl p-8 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-amber-200">
                    {category.title}
                  </h2>
                  <p className="text-amber-100/60 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-neutral-700/30 border border-neutral-600/20 rounded-lg p-6 hover:bg-neutral-700/50 hover:border-amber-500/30 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-medium text-amber-200 group-hover:text-amber-100 transition-colors">
                        {link.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-amber-400/60 group-hover:text-amber-400 transition-colors flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-amber-100/70 text-sm leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="max-w-7xl mx-auto mb-22 mt-12 text-center">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 max-w-7xl mx-auto">
            <p className="text-amber-200/80 leading-relaxed">
              <strong className="text-amber-200">Disclaimer:</strong> These
              resources are provided for informational purposes only. Links to
              external organizations do not constitute endorsement of their
              positions or services. Always verify information and seek
              appropriate professional advice for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinksComp;
