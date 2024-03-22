import { db } from "@/lib/db";

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorTOken = await db.twoFactorToken.findUnique({
      where: { token },
    });
    return twoFactorTOken;
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorTOken = await db.twoFactorToken.findFirst({
      where: { email },
    });
    return twoFactorTOken;
  } catch {
    return null;
  }
};
