import React, { useState, createElement } from 'react'
import { UserData, QuizResult } from './AuthPage'
interface ProfilePageProps {
    userData: UserData
    onLogout: () => void
    onStartNewQuiz: () => void
}
const ProfilePage: React.FC<ProfilePageProps> = ({
                                                     userData,
                                                     onLogout,
                                                     onStartNewQuiz,
                                                 }) => {
    const [certificateComment, setCertificateComment] = useState('')
    // Calculate statistics
    const totalQuizzes = userData.quizHistory.length
    const averageScore =
        totalQuizzes > 0
            ? userData.quizHistory.reduce((sum, quiz) => sum + quiz.score, 0) /
            totalQuizzes
            : 0
    // Get performance by mode
    const modeStats = userData.quizHistory.reduce(
        (
            stats: Record<
                string,
                {
                    count: number
                    totalScore: number
                }
            >,
            quiz,
        ) => {
            if (!stats[quiz.mode]) {
                stats[quiz.mode] = {
                    count: 0,
                    totalScore: 0,
                }
            }
            stats[quiz.mode].count += 1
            stats[quiz.mode].totalScore += quiz.score
            return stats
        },
        {},
    )
    // Get performance by difficulty
    const difficultyStats = userData.quizHistory.reduce(
        (
            stats: Record<
                string,
                {
                    count: number
                    totalScore: number
                }
            >,
            quiz,
        ) => {
            if (!stats[quiz.difficulty]) {
                stats[quiz.difficulty] = {
                    count: 0,
                    totalScore: 0,
                }
            }
            stats[quiz.difficulty].count += 1
            stats[quiz.difficulty].totalScore += quiz.score
            return stats
        },
        {},
    )
    // Get recent quizzes (last 5)
    const recentQuizzes = [...userData.quizHistory]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5)
    const getDifficultyLabel = (difficulty: string) => {
        const difficultyMap: Record<string, string> = {
            beginner: 'Débutant',
            easy: 'Facile',
            medium: 'Moyen',
            hard: 'Difficile',
            expert: 'Expert',
        }
        return difficultyMap[difficulty] || difficulty
    }
    const getModeLabel = (mode: string) => {
        const modeMap: Record<string, string> = {
            unity: 'Unity',
            csharp: 'C#',
            mixed: 'Mixte',
        }
        return modeMap[mode] || mode
    }
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date)
    }
    // Determine user level based on average score
    const getUserLevel = () => {
        if (averageScore >= 90) return 'Expert'
        if (averageScore >= 80) return 'Avancé'
        if (averageScore >= 70) return 'Intermédiaire'
        if (averageScore >= 60) return 'Basique'
        return 'Débutant'
    }
    // Define CSS styles as a separate string
    const certificateStyles = `
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
    .certificate {
      width: 800px;
      margin: 0 auto;
      padding: 40px;
      background-color: white;
      border: 1px solid #e0e0e0;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
    .certificate-header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 3px double #333;
      padding-bottom: 20px;
    }
    .certificate-title {
      font-size: 32px;
      color: #333;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .certificate-subtitle {
      font-size: 20px;
      color: #555;
    }
    .user-info {
      text-align: center;
      margin-bottom: 30px;
    }
    .user-name {
      font-size: 28px;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }
    .user-email {
      font-size: 16px;
      color: #666;
    }
    .certification-text {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 30px;
      text-align: center;
      color: #444;
    }
    .stats-container {
      margin-bottom: 30px;
    }
    .stats-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #333;
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .stat-item {
      background-color: #f9f9f9;
      padding: 15px;
      border-radius: 5px;
    }
    .stat-label {
      font-size: 16px;
      color: #666;
      margin-bottom: 5px;
    }
    .stat-value {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
    .comment-box {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
      margin-bottom: 30px;
    }
    .comment-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }
    .comment-text {
      font-size: 16px;
      font-style: italic;
      color: #555;
      line-height: 1.5;
    }
    .certificate-footer {
      margin-top: 40px;
      text-align: center;
      font-size: 14px;
      color: #777;
    }
    .signature-area {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
    }
    .signature {
      text-align: center;
      width: 200px;
    }
    .signature-line {
      border-top: 1px solid #333;
      margin-bottom: 5px;
    }
    .signature-name {
      font-weight: bold;
    }
    .signature-title {
      font-size: 14px;
      color: #666;
    }
    .certificate-id {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
    @media print {
      body {
        background-color: white;
      }
      .certificate {
        box-shadow: none;
        border: none;
      }
      .no-print {
        display: none;
      }
    }
  `
    // Generate certification HTML
    const generateCertification = () => {
        const today = new Date()
        const formattedDate = new Intl.DateTimeFormat('fr-FR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(today)
        const certificationId = `CERT-${userData.id}-${today.getTime()}`
        // Get the best mode (highest average score)
        let bestMode = ''
        let bestModeScore = 0
        Object.entries(modeStats).forEach(([mode, stats]) => {
            const modeAvg = stats.totalScore / stats.count
            if (modeAvg > bestModeScore) {
                bestModeScore = modeAvg
                bestMode = mode
            }
        })
        // Create the HTML for the certificate
        const certificateHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certification - ${userData.username}</title>
        <style>{`
        $
        {
            certificateStyles
        }
        ;`}</style>
      </head>
      <body>
        <div class="certificate">
          <div class="certificate-header">
            <div class="certificate-title">CERTIFICAT DE COMPÉTENCE</div>
            <div class="certificate-subtitle">Quiz Interactif - Unity & C#</div>
          </div>
          <div class="user-info">
            <div class="user-name">${userData.username}</div>
            <div class="user-email">${userData.email}</div>
          </div>
          <div class="certification-text">
            Ce certificat atteste que <strong>${userData.username}</strong> a démontré des compétences de niveau <strong>${getUserLevel()}</strong> 
            en complétant avec succès ${totalQuizzes} quiz interactifs, avec une spécialisation en <strong>${getModeLabel(bestMode)}</strong>.
          </div>
          <div class="stats-container">
            <div class="stats-title">Résultats</div>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-label">Score moyen</div>
                <div class="stat-value">${averageScore.toFixed(1)}%</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">Quiz complétés</div>
                <div class="stat-value">${totalQuizzes}</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">Meilleure performance</div>
                <div class="stat-value">${getModeLabel(bestMode)} (${bestModeScore.toFixed(1)}%)</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">Niveau</div>
                <div class="stat-value">${getUserLevel()}</div>
              </div>
            </div>
          </div>
          <div class="comment-box">
            <div class="comment-title">Commentaire</div>
            <div class="comment-text">${certificateComment || "L'utilisateur a démontré une bonne compréhension des concepts testés et a fait preuve de constance dans ses performances."}</div>
          </div>
          <div class="signature-area">
            <div class="signature">
              <div class="signature-line"></div>
              <div class="signature-name">Quiz Interactif</div>
              <div class="signature-title">Émetteur du certificat</div>
            </div>
            <div class="signature">
              <div class="signature-line"></div>
              <div class="signature-name">${userData.username}</div>
              <div class="signature-title">Participant</div>
            </div>
          </div>
          <div class="certificate-footer">
            Délivré le ${formattedDate}
          </div>
          <div class="certificate-id">
            ID: ${certificationId}
          </div>
        </div>
        <div class="no-print" style="text-align: center; margin-top: 20px;">
          <button onclick="window.print()" style="padding: 10px 20px; background-color: #333; color: white; border: none; cursor: pointer; font-size: 16px;">Imprimer le certificat</button>
        </div>
      </body>
      </html>
    `
        return certificateHtml
    }
    // Download certification as HTML file
    const downloadCertification = () => {
        const certificateHtml = generateCertification()
        const blob = new Blob([certificateHtml], {
            type: 'text/html',
        })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `certificat-${userData.username}-${new Date().toISOString().split('T')[0]}.html`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }
    // Open certification in new window for printing
    const openCertificationForPrint = () => {
        const certificateHtml = generateCertification()
        const newWindow = window.open()
        if (newWindow) {
            newWindow.document.write(certificateHtml)
            newWindow.document.close()
        }
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            Profil de {userData.username}
                        </h1>
                        <p className="text-gray-600">{userData.email}</p>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Total de quiz
                            </h3>
                            <p className="text-3xl font-bold text-gray-900">{totalQuizzes}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Score moyen
                            </h3>
                            <p className="text-3xl font-bold text-gray-900">
                                {averageScore.toFixed(1)}%
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Dernier quiz
                            </h3>
                            <p className="text-3xl font-bold text-gray-900">
                                {recentQuizzes.length > 0 ? `${recentQuizzes[0].score}%` : '-'}
                            </p>
                            {recentQuizzes.length > 0 && (
                                <p className="text-sm text-gray-600 mt-1">
                                    {getModeLabel(recentQuizzes[0].mode)} -{' '}
                                    {getDifficultyLabel(recentQuizzes[0].difficulty)}
                                </p>
                            )}
                        </div>
                    </div>

                    {totalQuizzes > 0 && (
                        <>
                            <section className="mb-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-4">
                                    Performance par mode
                                </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                        <tr className="bg-gray-50">
                                            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">
                                                Mode
                                            </th>
                                            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                                                Quiz terminés
                                            </th>
                                            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                                                Score moyen
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Object.entries(modeStats).map(([mode, stats]) => (
                                            <tr key={mode} className="border-b">
                                                <td className="py-3 px-4">{getModeLabel(mode)}</td>
                                                <td className="py-3 px-4 text-center">
                                                    {stats.count}
                                                </td>
                                                <td className="py-3 px-4 text-center">
                                                    {(stats.totalScore / stats.count).toFixed(1)}%
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section className="mb-8">
                                <h2 className="text-xl font-medium text-gray-900 mb-4">
                                    Performance par difficulté
                                </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                        <tr className="bg-gray-50">
                                            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">
                                                Difficulté
                                            </th>
                                            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                                                Quiz terminés
                                            </th>
                                            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                                                Score moyen
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Object.entries(difficultyStats).map(
                                            ([difficulty, stats]) => (
                                                <tr key={difficulty} className="border-b">
                                                    <td className="py-3 px-4">
                                                        {getDifficultyLabel(difficulty)}
                                                    </td>
                                                    <td className="py-3 px-4 text-center">
                                                        {stats.count}
                                                    </td>
                                                    <td className="py-3 px-4 text-center">
                                                        {(stats.totalScore / stats.count).toFixed(1)}%
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-xl font-medium text-gray-900 mb-4">
                                    Historique récent
                                </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                        <tr className="bg-gray-50">
                                            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">
                                                Date
                                            </th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">
                                                Mode
                                            </th>
                                            <th className="text-left py-3 px-4 font-medium text-gray-700 border-b">
                                                Difficulté
                                            </th>
                                            <th className="text-center py-3 px-4 font-medium text-gray-700 border-b">
                                                Score
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {recentQuizzes.map((quiz) => (
                                            <tr key={quiz.id} className="border-b">
                                                <td className="py-3 px-4">{formatDate(quiz.date)}</td>
                                                <td className="py-3 px-4">
                                                    {getModeLabel(quiz.mode)}
                                                </td>
                                                <td className="py-3 px-4">
                                                    {getDifficultyLabel(quiz.difficulty)}
                                                </td>
                                                <td className="py-3 px-4 text-center font-medium">
                                                    {quiz.score}%
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </>
                    )}

                    {totalQuizzes === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-600 mb-4">
                                Vous n'avez pas encore complété de quiz.
                            </p>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <button
                        className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
                        onClick={onStartNewQuiz}
                    >
                        Commencer un nouveau quiz
                    </button>
                </div>
            </main>
        </div>
    )
}
export default ProfilePage
