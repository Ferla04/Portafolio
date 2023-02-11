import { routes } from '../constants'

export const getRouteById = routeId => {
  return routes.find(route => route.id === routeId)
}
