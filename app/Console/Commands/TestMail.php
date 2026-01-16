<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class TestMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mail:test {email?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test the mail configuration by sending a test email';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email') ?? config('mail.from.address');
        
        $this->info('Testing mail configuration...');
        $this->info('Mail Driver: ' . config('mail.default'));
        $this->info('Mail Host: ' . config('mail.mailers.smtp.host'));
        $this->info('Mail Port: ' . config('mail.mailers.smtp.port'));
        $this->info('Mail Encryption: ' . config('mail.mailers.smtp.encryption'));
        $this->info('Mail Username: ' . (config('mail.mailers.smtp.username') ? '***configured***' : 'NOT SET'));
        $this->info('From Address: ' . config('mail.from.address'));
        $this->info('From Name: ' . config('mail.from.name'));
        $this->newLine();
        
        try {
            $this->info('Attempting to send test email to: ' . $email);
            
            Mail::raw('This is a test email from CDDAM. If you receive this, your mail configuration is working correctly!', function ($message) use ($email) {
                $message->to($email)
                        ->subject('Test Email - CDDAM Mail Configuration');
            });
            
            $this->info('✓ Email sent successfully!');
            $this->info('Check your inbox at: ' . $email);
            
        } catch (\Exception $e) {
            $this->error('✗ Failed to send email!');
            $this->error('Error: ' . $e->getMessage());
            $this->error('File: ' . $e->getFile() . ':' . $e->getLine());
            $this->newLine();
            $this->warn('Full error details have been logged. Check storage/logs/laravel.log');
            
            Log::error('Mail test failed', [
                'exception' => get_class($e),
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString(),
            ]);
            
            return 1;
        }
        
        return 0;
    }
}


