"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface VotingInfoWidgetProps {
  address?: string;
}

export default function VotingInfoWidget({
  address = "Pompano Beach, FL",
}: VotingInfoWidgetProps) {
  const [voterInfo, setVoterInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/google-civic/voter-info?address=${encodeURIComponent(address)}`)
      .then((res) => res.json())
      .then((data) => {
        setVoterInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching voter info:", err);
        setLoading(false);
      });
  }, [address]);

  if (loading) {
    return (
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
        <CardContent className="p-6">
          <p className="text-slate-400 text-center">
            Loading voter information...
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!voterInfo || voterInfo.error) {
    return (
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <span className="text-2xl">🗳️</span>
            Your Voting Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-slate-300">
              No upcoming elections in your area. Check back closer to election
              day.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const election = voterInfo.election;
  const pollingLocations = voterInfo.pollingLocations || [];
  const contests = voterInfo.contests || [];

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span className="text-2xl">🗳️</span>
          Your Voting Information
        </CardTitle>
        <CardDescription className="text-slate-400">
          Everything you need to vote in {address.split(",").pop()?.trim()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Election Info */}
        {election && (
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-semibold text-white">{election.name}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(election.electionDay).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
              <Badge
                variant="outline"
                className="bg-blue-500/20 text-blue-400 border-blue-500/30"
              >
                Upcoming
              </Badge>
            </div>
          </div>
        )}

        {/* Polling Locations */}
        {pollingLocations.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase mb-3">
              Your Polling Place
            </h4>
            {pollingLocations
              .slice(0, 1)
              .map((location: any, index: number) => (
                <div
                  key={index}
                  className="p-4 bg-slate-900/50 rounded-lg border border-slate-700"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-white">
                        {location.address.locationName || "Polling Location"}
                      </p>
                      <p className="text-sm text-slate-400 mt-1">
                        {location.address.line1}
                        <br />
                        {location.address.city}, {location.address.state}{" "}
                        {location.address.zip}
                      </p>
                      {location.pollingHours && (
                        <p className="text-xs text-slate-500 mt-2">
                          Hours: {location.pollingHours}
                        </p>
                      )}
                    </div>
                  </div>
                  {location.notes && (
                    <p className="text-xs text-slate-400 mt-3 pl-8">
                      Note: {location.notes}
                    </p>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* What's on the Ballot */}
        {contests.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase mb-3">
              On Your Ballot
            </h4>
            <div className="space-y-2">
              {contests.slice(0, 3).map((contest: any, index: number) => (
                <div
                  key={index}
                  className="p-3 bg-slate-900/50 rounded-lg border border-slate-700"
                >
                  <p className="text-sm font-semibold text-white">
                    {contest.office}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {contest.candidates?.length || 0} candidates
                  </p>
                </div>
              ))}
              {contests.length > 3 && (
                <p className="text-xs text-slate-500 text-center pt-2">
                  + {contests.length - 3} more races
                </p>
              )}
            </div>
          </div>
        )}

        {/* Important Links */}
        <div className="space-y-2">
          {voterInfo.state?.[0]?.electionAdministrationBody
            ?.electionRegistrationUrl && (
            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
              asChild
            >
              <a
                href={
                  voterInfo.state[0].electionAdministrationBody
                    .electionRegistrationUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Registration Status
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
          {voterInfo.state?.[0]?.electionAdministrationBody
            ?.votingLocationFinderUrl && (
            <Button
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
              asChild
            >
              <a
                href={
                  voterInfo.state[0].electionAdministrationBody
                    .votingLocationFinderUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Polling Places
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </div>

        {/* Important Notice */}
        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-300">
              Verify your voter registration and know your rights before
              election day. Bring valid ID if required in your state.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
