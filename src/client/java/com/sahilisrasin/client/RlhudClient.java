
package com.sahilisrasin.client;

import net.fabricmc.api.ClientModInitializer;
import net.fabricmc.fabric.api.client.rendering.v1.hud.HudElementRegistry;
import net.minecraft.client.MinecraftClient;
import net.minecraft.client.gui.DrawContext;
import net.minecraft.entity.EquipmentSlot;
import net.minecraft.item.ItemStack;
import net.minecraft.util.Identifier;

public class RlhudClient implements ClientModInitializer {

    private static final int LOW_DURABILITY_PERCENT = 20;

    @Override
    public void onInitializeClient() {
        HudElementRegistry.addLast(
                Identifier.of("rlhud", "armor_hud"),
                (context, tickCounter) -> renderArmorHud(context)
        );
    }

    private static void renderArmorHud(DrawContext context) {
        MinecraftClient client = MinecraftClient.getInstance();

        if (client.player == null || client.options.hudHidden) {
            return;
        }

        int x = 8;
        int y = 8;

        context.fill(x, y, x + 115, y + 80, 0xCC101820);

        context.drawTextWithShadow(
                client.textRenderer, "RLHUD",
                x + 6, y + 5, 0xFF62D8FF
        );

        context.drawTextWithShadow(
                client.textRenderer,
                "FPS: " + client.getCurrentFps(),
                x + 6, y + 18, 0xFFFFFFFF
        );

        EquipmentSlot[] slots = {
                EquipmentSlot.HEAD,
                EquipmentSlot.CHEST,
                EquipmentSlot.LEGS,
                EquipmentSlot.FEET
        };

        String[] labels = {"Head", "Chest", "Legs", "Feet"};

        for (int i = 0; i < slots.length; i++) {
            ItemStack stack = client.player.getEquippedStack(slots[i]);

            int percent = getDurabilityPercent(stack);
            String value = stack.isEmpty() ? "--"
                    : stack.isDamageable() ? percent + "%" : "OK";

            int color = stack.isEmpty() ? 0xFFAAAAAA
                    : percent <= LOW_DURABILITY_PERCENT
                    ? 0xFFFF5555
                    : percent <= 50
                    ? 0xFFFFAA00
                    : 0xFF55FF55;

            context.drawTextWithShadow(
                    client.textRenderer,
                    labels[i] + ": " + value,
                    x + 6, y + 31 + i * 11, color
            );
        }
    }

    private static int getDurabilityPercent(ItemStack stack) {
        if (stack.isEmpty() || !stack.isDamageable()) {
            return 100;
        }

        int max = stack.getMaxDamage();
        if (max <= 0) {
            return 100;
        }

        return (max - stack.getDamage()) * 100 / max;
    }
}
