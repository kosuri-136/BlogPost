import React, {useState, useEffect, useReducer} from 'react'
import {Row, Col, Container, Alert} from 'reactstrap'
import Card from '../../Components/Card/Card'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import AuthorPagination from '../../Components/AuthorPagination/AuthorPagination'
import Axios from 'axios'
import Footer from '../../Components/Footer/Footer'
import { baseUrl } from '../../utils/config'
const initialUsers = {
  loading: true,
  error: '',
  authors: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SCCESS':
      return {
        loading: false,
        authors: action.payLoad,
        error: '',
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        authors: [],
        error: 'Somthing Went Wrong !!',
      }
    default:
      return state
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialUsers)

  const [showPerPage, setShowPerPage] = useState(75)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })

  const onPaginationChange = (start, end) => {
    setPagination({start: start, end: end})
  }

  useEffect(() => {
    Axios.get(`${baseUrl}/authors`)
      .then(authors => {
        dispatch({
          type: 'FETCH_SCCESS',
          payLoad: authors.data,
        })
      })
      .catch(
        dispatch({
          type: 'FETCH_ERROR',
        }),
      )
  }, [])

  return (
    <div>
      <NavigationBar />
      <h4 className="text-white mb-4 mt-4 text-center">All Users</h4>
      <Container>
        {state.loading ? (
          <Alert color="info" className="mt-4">
            Loading
            {/* <i className="fa fa-spinner fa-spin"></i> */}
          </Alert>
        ) : (
          <Row>
            {state.authors
              .slice(pagination.start, pagination.end)
              .map(author => {
                return (
                  <div key={author.id}>
                    <Col key={author.id} md={4} sm={6} xs={12}>
                      <Card
                        name={author.firstName + ' ' + author.lastName}
                        id={author.id}
                      />
                    </Col>
                  </div>
                )
              })}
          </Row>
        )}
        {state.error ? state.error : null}

        <AuthorPagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          totalAuthors={state.authors.length}
        />
      </Container>
      <Footer />
    </div>
  )
}

export default Home
