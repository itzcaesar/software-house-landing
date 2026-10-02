CREATE TABLE `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`path` text DEFAULT '' NOT NULL,
	`label` text DEFAULT '' NOT NULL,
	`session` text DEFAULT '' NOT NULL,
	`referrer` text DEFAULT '' NOT NULL,
	`utm_source` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `events_created_at_idx` ON `events` (`created_at`);