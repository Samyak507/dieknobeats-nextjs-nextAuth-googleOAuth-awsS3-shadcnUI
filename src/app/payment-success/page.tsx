"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccessPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [countdown, setCountdown] = useState(20);
    const [downloadStarted, setDownloadStarted] = useState(false);

    const paymentId = searchParams.get("payment_id");
    const orderId = searchParams.get("order_id");
    const rawDownloadUrl = searchParams.get("download_url");

    // Safely decode URL (prevents crash if already decoded)
    const downloadUrl = rawDownloadUrl
        ? rawDownloadUrl.includes("%")
            ? decodeURIComponent(rawDownloadUrl)
            : rawDownloadUrl
        : null;

    /**
     * Auto-download after 5 seconds
     * Uses page redirect (browser-safe)
     */
    useEffect(() => {
        if (!downloadUrl || downloadStarted) return;

        const timer = setTimeout(() => {
            console.log("📥 Auto-downloading file...");
            setDownloadStarted(true);
            window.location.href = downloadUrl;
        }, 5000);

        return () => clearTimeout(timer);
    }, [downloadUrl, downloadStarted]);

    /**
     * Countdown redirect to home
     * Only after download starts
     */
    useEffect(() => {
        if (!downloadStarted) return;

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    router.push("/");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [downloadStarted, router]);

    const handleManualDownload = () => {
        if (!downloadUrl) return;

        console.log("📥 Manual download triggered");
        setDownloadStarted(true);
        window.location.href = downloadUrl;
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center text-white">

                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold mb-4 text-green-400">
                    Payment Successful
                </h1>

                <p className="text-gray-400 mb-6">
                    {downloadStarted
                        ? "Your download has started. Please check your downloads folder."
                        : "Your purchase is confirmed. Your download will begin automatically in 5 seconds."}
                </p>

                {downloadUrl && (
                    <button
                        onClick={handleManualDownload}
                        disabled={downloadStarted}
                        className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 text-black hover:from-cyan-500 hover:to-purple-700 transition-all mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {downloadStarted ? "✓ Download Started" : "Download Now"}
                    </button>
                )}

                {paymentId && (
                    <div className="bg-gray-800 rounded-lg p-4 mb-4 text-left">
                        <p className="text-xs text-gray-400 mb-2">Payment Details</p>

                        <div className="space-y-2">
                            <div>
                                <p className="text-xs text-gray-500">Payment ID</p>
                                <p className="text-sm font-mono text-green-400 break-all">
                                    {paymentId}
                                </p>
                            </div>

                            {orderId && (
                                <div>
                                    <p className="text-xs text-gray-500">Order ID</p>
                                    <p className="text-sm font-mono text-cyan-400 break-all">
                                        {orderId}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {downloadStarted && (
                    <div className="bg-gray-800 rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-400">
                            Redirecting to home in{" "}
                            <span className="text-cyan-400 font-bold text-lg">
                                {countdown}
                            </span>{" "}
                            seconds
                        </p>
                    </div>
                )}

                <button
                    onClick={() => router.push("/")}
                    className="w-full py-3 rounded-xl font-semibold border border-gray-700 text-white hover:bg-gray-800 transition-all"
                >
                    Go to Home
                </button>

                <div className="mt-6 pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-400 mb-2">Need Help?</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                        <li>Save your payment details for reference</li>
                        <li>Contact support if download does not start</li>
                        <li>Check your browser downloads section</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
