import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Award, 
  ExternalLink,
  Calendar,
  Code,
  Star,
  Loader2
} from "lucide-react";

const ProblemSolving = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [codeforcesData, setCodeforcesData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace with your actual Codeforces handle
  const codeforcesHandle = "ahmed_shahriyar";

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        setLoading(true);
        
        // Fetch user info
        const userInfoResponse = await fetch(
          `https://codeforces.com/api/user.info?handles=${codeforcesHandle}`
        );
        const userInfoData = await userInfoResponse.json();
        
        if (userInfoData.status !== "OK") {
          throw new Error(userInfoData.comment || "Failed to fetch user info");
        }
        
        // Fetch user submissions
        const submissionsResponse = await fetch(
          `https://codeforces.com/api/user.status?handle=${codeforcesHandle}`
        );
        const submissionsData = await submissionsResponse.json();
        
        if (submissionsData.status !== "OK") {
          throw new Error(submissionsData.comment || "Failed to fetch submissions");
        }
        
        // Process submissions to get solved problems count and recent problems
        const solvedProblems = new Set();
        const recentProblems = [];
        
        for (const submission of submissionsData.result) {
          if (submission.verdict === "OK") {
            const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
            
            if (!solvedProblems.has(problemId)) {
              solvedProblems.add(problemId);
              
              // Add to recent problems if not already there
              if (recentProblems.length < 5) {
                recentProblems.push({
                  contestId: submission.problem.contestId,
                  index: submission.problem.index,
                  name: submission.problem.name,
                  rating: submission.problem.rating || "Unknown",
                  tags: submission.problem.tags || [],
                  programmingLanguage: submission.programmingLanguage,
                  submissionTime: submission.creationTimeSeconds,
                });
              }
            }
          }
        }
        
        setCodeforcesData({
          userInfo: userInfoData.result[0],
          solvedCount: solvedProblems.size,
          recentProblems: recentProblems,
        });
        
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    
    fetchCodeforcesData();
  }, [codeforcesHandle]);

  const platforms = [
    {
      name: "LeetCode",
      solved: 14,
      total: 3632,
      rating: 33,
      rank: "",
      color: "bg-orange-500",
      url: "https://leetcode.com/u/mdshahariyar8/",
    },
    {
      name: "Codeforces",
      solved: codeforcesData?.solvedCount || 120,
      total: 1000,
      rating: codeforcesData?.userInfo?.rating || 1420,
      rank: codeforcesData?.userInfo?.rank || "Specialist",
      color: "bg-blue-500",
      url: `https://codeforces.com/profile/${codeforcesHandle}`,
    },
    {
      name: "CodeChef",
      solved: 60,
      total: 500,
      rating: 1003,
      rank: "1 Star",
      color: "bg-brown-500",
      url: "https://codechef.com",
    },
    {
      name: "HackerRank",
      solved: 85,
      total: 300,
      rating: 1200,
      rank: "Gold",
      color: "bg-green-500",
      url: "https://hackerrank.com",
    },
  ];

  const achievements = [
    {
      title: "500+ Problems Solved",
      description: "Crossed the milestone of solving 500+ problems across all platforms",
      icon: Trophy,
      date: "January 2024",
    },
    {
      title: "6th Rank in Neu IUPC 2025",
      description: "Secured 6th place in the Neu IUPC 2025 ",
      icon: Award,
      date: "March 2025",
    },
    {
      title: "NCPC 2023 Finalist",
      description: "Qualified for the National Collegiate Programming Contestfinals",
      icon: Star,
      date: "November 2023",
    },
    {
      title: "100 Day Streak",
      description: "Maintained a 100-day problem-solving streak",
      icon: Target,
      date: "October 2023",
    },
  ];

  // Combine static recent problems with fetched Codeforces problems
  const recentProblems = [
    ...(codeforcesData?.recentProblems?.map((problem: any) => ({
      title: problem.name,
      platform: "Codeforces",
      difficulty: problem.rating !== "Unknown" ? `${problem.rating}` : "Unknown",
      tags: problem.tags,
      solvedDate: new Date(problem.submissionTime * 1000).toISOString().split('T')[0],
      language: problem.programmingLanguage,
    })) || []),
    {
      title: "Binary Tree Maximum Path Sum",
      platform: "LeetCode",
      difficulty: "Hard",
      tags: ["Tree", "Dynamic Programming", "Recursion"],
      solvedDate: "2024-01-15",
      language: "C++",
    },
    {
      title: "Graph Coloring Problem",
      platform: "CodeChef",
      difficulty: "Hard",
      tags: ["Graph Theory", "Backtracking"],
      solvedDate: "2024-01-13",
      language: "Python",
    },
  ].slice(0, 5); // Limit to 5 most recent problems

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "Unknown") return "bg-gray-100 text-gray-800";
    
    const rating = parseInt(difficulty);
    if (isNaN(rating)) return "bg-gray-100 text-gray-800";
    
    if (rating < 1200) return "bg-green-100 text-green-800";
    if (rating < 1600) return "bg-blue-100 text-blue-800";
    if (rating < 2000) return "bg-purple-100 text-purple-800";
    if (rating < 2400) return "bg-yellow-100 text-yellow-800";
    if (rating < 2800) return "bg-red-100 text-red-800";
    return "bg-red-100 text-red-800";
  };

  const formatDifficulty = (difficulty: string) => {
    if (difficulty === "Unknown") return "Unknown";
    
    const rating = parseInt(difficulty);
    if (isNaN(rating)) return difficulty;
    
    if (rating < 1200) return "Easy";
    if (rating < 1600) return "Medium";
    if (rating < 2000) return "Hard";
    if (rating < 2400) return "Very Hard";
    return "Expert";
  };

  const totalSolved = platforms.reduce((sum, platform) => sum + platform.solved, 0);

  return (
    <div className="min-h-screen pt-16">
      {/* Loading state */}
      {loading && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Fetching Codeforces data...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
            <h3 className="font-bold mb-2">Error fetching Codeforces data</h3>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 text-sm text-red-600 hover:text-red-800"
            >
              Try again
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Problem <span className="text-primary">Solving</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            My journey through competitive programming and algorithmic challenges
          </p>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalSolved}+</div>
              <p className="text-muted-foreground">Problems Solved</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <p className="text-muted-foreground">Active Platforms</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">1003</div>
              <p className="text-muted-foreground">Highest Rating</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Coding <span className="text-primary">Platforms</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card 
                key={platform.name} 
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${platform.color}`} />
                    <h3 className="text-xl font-semibold text-foreground">{platform.name}</h3>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Problems Solved</span>
                    <span className="font-semibold text-foreground">
                      {platform.solved} / {platform.total}
                    </span>
                  </div>
                  
                  <Progress 
                    value={(platform.solved / platform.total) * 100} 
                    className="h-2"
                  />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Rating</span>
                    <Badge variant="secondary" className="font-medium">
                      {platform.rating}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Rank</span>
                    <Badge variant="outline" className="capitalize">
                      {platform.rank}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Problems */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Recent <span className="text-primary">Solves</span>
          </h2>
          
          <div className="space-y-4">
            {recentProblems.map((problem, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-medium transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Code className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline">{problem.platform}</Badge>
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {formatDifficulty(problem.difficulty)}
                      </Badge>
                      <Badge variant="secondary">{problem.language}</Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-violet-100 text-violet-700 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(problem.solvedDate).toLocaleDateString()}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            <Trophy className="inline h-10 w-10 mr-3 text-primary" />
            Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress & Goals */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Current <span className="text-primary">Goals</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Reach Expert Level
              </h3>
              <p className="text-muted-foreground mb-4">
                Target: Achieve Expert rank on Codeforces (1600+ rating)
              </p>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }} />
              </div>
              <p className="text-sm text-muted-foreground mt-2">88% complete</p>
            </Card>
            
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                1000 Problems
              </h3>
              <p className="text-muted-foreground mb-4">
                Target: Solve 1000+ problems across all platforms
              </p>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "48%" }} />
              </div>
              <p className="text-sm text-muted-foreground mt-2">480/1000 solved</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemSolving;