export default function ({ app, redirect, route }) {
  const excepts = ['/login', '/signup']
  if (!excepts.includes(route.path)) {
    const sessionId = app?.$cookies?.get('id')
    // 로그인되지 않은 경우 리다이렉트
    if (!sessionId) {
      return redirect('/login')
    }
  }
}
