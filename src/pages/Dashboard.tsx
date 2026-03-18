"use client";

import React from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  Settings, 
  Plus,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const myClans = [
    {
      id: 1,
      name: "Web3 Wizards",
      hackathon: "EthIndia 2024",
      role: "Frontend Lead",
      status: "Active",
      members: 3,
      maxMembers: 4
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border p-6 flex flex-col gap-8">
        <div className="text-2xl font-bold font-mono tracking-tighter">CLANUP</div>
        
        <nav className="flex flex-col gap-2">
          <Button variant="secondary" className="justify-start gap-3 rounded-xl">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground" onClick={() => navigate('/teams')}>
            <Users className="w-4 h-4" /> Find Teams
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground">
            <Trophy className="w-4 h-4" /> Hackathons
          </Button>
          <Button variant="ghost" className="justify-start gap-3 rounded-xl text-muted-foreground">
            <Settings className="w-4 h-4" /> Settings
          </Button>
        </nav>

        <div className="mt-auto p-4 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Pro Tip</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Complete your profile to get 2x more team invites.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 space-y-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight font-sora">Welcome back, {user?.email?.split('@')[0]}</h1>
            <p className="text-muted-foreground font-sora">You have 1 active team and 2 pending invites.</p>
          </div>
          <Button 
            className="bg-[#7be382] hover:bg-[#6ad071] text-black font-bold rounded-xl px-6 py-6 gap-2"
            onClick={() => navigate('/make-team')}
          >
            <Plus className="w-5 h-5" /> Create New Clan
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Clans */}
          <section className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold font-sora">Your Clans</h2>
              <Link to="/teams" className="text-sm text-primary hover:underline">View all</Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {myClans.map((clan) => (
                <Card key={clan.id} className="bg-card border-border hover:border-primary/20 transition-all group rounded-2xl overflow-hidden">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {clan.name[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{clan.name}</h3>
                        <p className="text-sm text-muted-foreground">{clan.hackathon}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="hidden md:block text-right">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Role</p>
                        <p className="text-sm font-medium">{clan.role}</p>
                      </div>
                      <div className="hidden md:block text-right">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Squad</p>
                        <p className="text-sm font-medium">{clan.members}/{clan.maxMembers}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Activity Feed */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold font-sora">Recent Activity</h2>
            <Card className="bg-card border-border rounded-2xl">
              <CardContent className="p-6 space-y-6">
                {[
                  { text: "Aryan K. requested to join Web3 Wizards", time: "2h ago", icon: <Users className="w-4 h-4" /> },
                  { text: "New hackathon: AI Genesis 2024", time: "5h ago", icon: <Trophy className="w-4 h-4" /> },
                  { text: "Profile viewed by 12 people", time: "1d ago", icon: <Clock className="w-4 h-4" /> }
                ].map((activity, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 p-2 rounded-lg bg-muted text-muted-foreground">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-tight">{activity.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;