import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Bus, Shield, BarChart3, Bell } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Gate Entry System</h1>
          <p className="text-gray-600">College Security Management</p>
        </div>

        {/* Main Actions */}
        <div className="space-y-4 mb-8">
          <Link href="/visitor-entry">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-blue-200 hover:border-blue-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Visitor Entry</CardTitle>
                    <CardDescription>Register unknown visitors</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/vehicle-entry">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-green-200 hover:border-green-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Bus className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Vehicle Entry</CardTitle>
                    <CardDescription>Track college vehicle entries</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/notifications">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-purple-200 hover:border-purple-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Notifications</CardTitle>
                    <CardDescription>Authority requests & updates</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-transparent"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm">Dashboard</span>
            </Button>
          </Link>

          <Link href="/authorities">
            <Button
              variant="outline"
              className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-transparent"
            >
              <Shield className="w-5 h-5" />
              <span className="text-sm">Authorities</span>
            </Button>
          </Link>

          <Link href="/vehicle-entry">
            <Button
              variant="outline"
              className="w-full h-16 flex flex-col items-center justify-center space-y-1 bg-transparent"
            >
              <Bus className="w-4 h-4" />
              <span className="text-xs">New Vehicle</span>
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Secure • Efficient • Reliable</p>
        </div>
      </div>
    </div>
  )
}
