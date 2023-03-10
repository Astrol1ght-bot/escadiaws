import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { CreateCourseInput } from 'src/API'
import { ErrorNotification } from 'src/container/DataManagement/ErrorNotification'
import { Layout } from 'src/container/Layout/Layout'
import { createCourse } from 'src/graphql/mutations'
import { addElement } from 'src/services/apiMutations'

import { CourseForm } from './CourseForm'

export const CreateProduct: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const navigate = useNavigate()

  const addCourse = (data: CreateCourseInput) => {
    setLoading(true)
    addElement({ ...data }, createCourse)
      .then(() => navigate('/admin/courses/', { replace: true }))
      .catch((e) => {
        console.error(e)
        setError(e)
      })
      .finally(() => setLoading(false))
  }

  return (
    <Layout title='Crea un nuevo Curso' breadCrumbs={[{ text: 'Cursos', href: '/admin/courses' }]}>
      <>
        {error && <ErrorNotification errors={[error]} />}
        <CourseForm
          isLoading={isLoading}
          onSubmit={(data) => addCourse(data)}
          title='Crea un nuevo Curso'
        />
      </>
    </Layout>
  )
}
