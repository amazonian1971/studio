import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="container max-w-4xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Manage your account and application settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div>
                        <h3 className="text-lg font-medium">Account</h3>
                        <div className="mt-4 space-y-4">
                           <p className="text-muted-foreground">Account settings will be available here.</p>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-lg font-medium">Appearance</h3>
                        <div className="mt-4 space-y-4">
                           <p className="text-muted-foreground">Theme settings can be changed in the user menu.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
