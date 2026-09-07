import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { AchievementsPage } from '@/pages/AchievementsPage'
import { BlockPage } from '@/pages/BlockPage'
import { CoursePage } from '@/pages/CoursePage'
import { DashboardPage } from '@/pages/DashboardPage'
import { ExamPage } from '@/pages/ExamPage'
import { LessonPage } from '@/pages/LessonPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PracticePage } from '@/pages/PracticePage'
import { ProfilePage } from '@/pages/ProfilePage'
import { StatisticsPage } from '@/pages/StatisticsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="course/:levelId/:blockId" element={<BlockPage />} />
          <Route path="course/:levelId/:blockId/lesson/:lessonId" element={<LessonPage />} />
          <Route path="course/:levelId/:blockId/practice" element={<PracticePage />} />
          <Route path="course/:levelId/:blockId/exam" element={<ExamPage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
