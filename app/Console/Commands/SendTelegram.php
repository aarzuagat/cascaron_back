<?php

namespace App\Console\Commands;

use App\Http\Controllers\TelegramController;
use App\Models\TelegramMessage;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendTelegram extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:telegram';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $messages = TelegramMessage::whereNull('sent_at')->orderByDesc('priority')->take(60)->get();
        foreach ($messages as $message) {
            $date = date('H:i', strtotime($message->created_at));
            $msg = "*($date)*: $message->description";
            $bot = null;
            $chat = null;
            if (env('APP_ENV') === 'localmine') {
                $bot = '5608928579:AAE837d4cHhtP17dQwdjwS5A8LONipBHvV8';
                $chat = '-880968430';
            }
            $sended = (new TelegramController())->sendMessage($msg, bot_token: $bot, chat_id: $chat);
            if ($sended) {
                $message->sent_at = Carbon::now();
                $message->save();
            }
            sleep(1);
        }


        return 1;
    }
}
