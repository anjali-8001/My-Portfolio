import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(req, res) {
  await dbConnect();
  try {
    const ipAddress =
      req.headers.get("x-forwarded-for") || // Proxies
      req.headers.get("x-real-ip") || // Some setups use 'x-real-ip'
      req.socket?.remoteAddress; // Fallback to request's remote address

    const userExists = await UserModel.findOne({ ipAddress });

    if (!userExists) {
      const newUser = await UserModel.create({ ipAddress, visits: 1 });
      return Response.json(
        { success: true, message: "Successful." },
        { status: 200 }
      );
    } else {
      const updatedUser = await UserModel.findByIdAndUpdate(userExists._id, {
        visits: userExists.visits + 1,
      });
      return Response.json(
        { success: true, message: "Successful." },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
